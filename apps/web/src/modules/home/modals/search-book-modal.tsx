'use client';
import React, { useState } from 'react';
import { Size, Book, Reading_Status } from '@/graphql/graphql';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useSearchMyLibraryLazyQuery } from '@/graphql/graphql';
import { formatAuthors } from '@/lib/utils';
import BookCover from '@/components/book-cover';
import { DEFAULT_BOOKCOVER_PLACEHOLDER } from '@/lib/constants';
import { useUpdateUserBook } from '@/modules/bookshelves/mutations/use-update-user-book';
import { toast } from '@/hooks/use-toast';

interface SearchBookModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export const SearchBookModal: React.FC<SearchBookModalProps> = ({ isOpen, onClose }) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);

    const [loadBooks] = useSearchMyLibraryLazyQuery({
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-only',
        notifyOnNetworkStatusChange: true,
        onError: (error) => {
            console.error(error);
            toast({ title: 'Error searching books', variant: 'destructive' });
        },
        onCompleted: (data) => {
            if (data && data.searchMyLibrary) {
                setBooks(data.searchMyLibrary as Book[]);
                setHasSearched(true);
            }
        },
    });

    const { updateUserBook } = useUpdateUserBook({
        onCompleted: () => {
            toast({
                title: 'Book added to Currently Reading',
                variant: 'success',
            });
            onClose();
        },
        onError: (error) => {
            toast({ title: error.message, variant: 'destructive' });
        },
    });

    const handleSearch = async (query: string) => {
        if (!query.trim()) {
            setBooks([]);
            setHasSearched(false);
            return;
        }

        setLoading(true);
        try {
            await loadBooks({
                variables: {
                    query: query,
                },
            });
        } finally {
            setLoading(false);
        }
    };

    const handleBookClick = async (book: Book) => {
        if (book.userBook?.id) {
            await updateUserBook(book.userBook.id, {
                status: Reading_Status.Reading,
            });
        }
    };

    const getCoverUrl = (book: Book) => {
        if (!book.covers || book.covers.length === 0) {
            return DEFAULT_BOOKCOVER_PLACEHOLDER;
        }
        const cover = book.covers.find(c => c.size === Size.Small);
        return cover?.url || book.covers[0].url || DEFAULT_BOOKCOVER_PLACEHOLDER;
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-2xl">
                <DialogHeader>
                    <DialogTitle>Add a book to Currently Reading</DialogTitle>
                </DialogHeader>
                <div className="relative">
                    <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
                    <Input
                        placeholder="Search your library..."
                        value={searchQuery}
                        onChange={(e) => {
                            setSearchQuery(e.target.value);
                            handleSearch(e.target.value);
                        }}
                        className="pl-9"
                    />
                </div>
                <div className="mt-4 max-h-[400px] overflow-y-auto">
                    {loading ? (
                        <div className="flex justify-center py-4">
                            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-beige-700"></div>
                        </div>
                    ) : hasSearched ? (
                        <div className="grid gap-2">
                            {books.length > 0 ? (
                                books.map((book) => (
                                    <button
                                        key={book.id}
                                        onClick={() => handleBookClick(book)}
                                        className="flex w-full items-center gap-4 rounded-lg border p-3 hover:bg-gray-50 text-left"
                                    >
                                        <BookCover src={getCoverUrl(book)} size="xxs" />
                                        <div className="flex flex-col">
                                            <h3 className="font-medium text-beige-700">{book.title}</h3>
                                            <p className="text-sm text-gray-500">
                                                by {formatAuthors(book.authors || [])}
                                            </p>
                                        </div>
                                    </button>
                                ))
                            ) : (
                                <div className="text-center text-gray-500 py-4">
                                    No books found in your library
                                </div>
                            )}
                        </div>
                    ) : null}
                </div>
            </DialogContent>
        </Dialog>
    );
};
