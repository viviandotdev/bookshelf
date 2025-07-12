'use client';
import React, { useState } from 'react';
import {
    Size,
    Book,
    Reading_Status,
    GetUserBooksDocument,
} from '@/graphql/graphql';
import { Button } from '@/components/ui/button';
import { Search, X } from 'lucide-react';
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
    DialogFooter,
} from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';
import { useSearchMyLibraryLazyQuery } from '@/graphql/graphql';
import { formatAuthors } from '@/lib/utils';
import BookCover from '@/components/book-cover';
import { DEFAULT_BOOKCOVER_PLACEHOLDER } from '@/lib/constants';
import { useUpdateUserBook } from '@/modules/bookshelves/mutations/use-update-user-book';
import { toast } from '@/hooks/use-toast';
import useProgressModal from '@/components/modals/progress-modal/use-progress-modal';

interface SearchBookModalProps {
    isOpen: boolean;
    onClose: () => void;
}

interface BookSearchResultProps {
    book: Book;
    isSelected: boolean;
    onSelect: (book: Book) => void;
}

const BookSearchResult: React.FC<BookSearchResultProps> = ({ book, isSelected, onSelect }) => {
    const getCoverUrl = (book: Book) => {
        if (!book.covers || book.covers.length === 0) {
            return DEFAULT_BOOKCOVER_PLACEHOLDER;
        }
        const cover = book.covers.find((c) => c.size === Size.Small);
        return cover?.url || book.covers[0].url || DEFAULT_BOOKCOVER_PLACEHOLDER;
    };

    return (
        <button
            onClick={() => onSelect(book)}
            className={`flex w-full items-center gap-4 rounded-lg border p-3 text-left hover:bg-gray-50 ${isSelected ? 'border-beige-700 bg-beige-50' : ''
                }`}
        >
            <BookCover src={getCoverUrl(book)} size='xxs' />
            <div className='flex flex-col'>
                <h3 className='font-medium text-beige-700'>{book.title}</h3>
                <p className='text-sm text-gray-500'>
                    by {formatAuthors(book.authors || [])}
                </p>
            </div>
        </button>
    );
};

const SearchInput: React.FC<{
    value: string;
    onChange: (value: string) => void;
}> = ({ value, onChange }) => (
    <div className='relative'>
        <Search className='absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500' />
        <Input
            placeholder='Search your library...'
            value={value}
            onChange={(e) => onChange(e.target.value)}
            className='pl-9'
        />
    </div>
);

const LoadingSpinner: React.FC = () => (
    <div className='flex justify-center py-4'>
        <div className='h-8 w-8 animate-spin rounded-full border-b-2 border-beige-700'></div>
    </div>
);

const NoResults: React.FC = () => (
    <div className='py-4 text-center text-gray-500'>
        No books found in your library
    </div>
);

export const SearchBookModal: React.FC<SearchBookModalProps> = ({
    isOpen,
    onClose,
}) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(false);
    const [hasSearched, setHasSearched] = useState(false);
    const [selectedBook, setSelectedBook] = useState<Book | null>(null);
    const [isInitialSearch, setIsInitialSearch] = useState(true);

    const [loadBooks] = useSearchMyLibraryLazyQuery({
        fetchPolicy: 'cache-and-network',
        nextFetchPolicy: 'cache-only',
        notifyOnNetworkStatusChange: true,
        onError: (error) => {
            console.error(error);
            toast({ title: 'Error searching books', variant: 'destructive' });
        },
        onCompleted: (data) => {
            if (data?.searchMyLibrary) {
                const filteredBooks = (data.searchMyLibrary as Book[]).filter(
                    (book) => book.userBook?.status !== Reading_Status.Reading
                );
                setBooks(filteredBooks);
                setHasSearched(true);
            }
        },
    });

    const { updateUserBook } = useUpdateUserBook({
        onCompleted: (userBook) => {
            toast({
                title: `${userBook.book.title} status updated to currently reading`,
                variant: 'success',
            });
            if (userBook.readDates) {
            }
            onClose();
        },
        onError: (error) => {
            console.error('Error updating book:', error);
            toast({ title: error.message, variant: 'destructive' });
        },
    });

    const handleSearch = async (query: string) => {
        if (!query.trim()) {
            setBooks([]);
            setHasSearched(false);
            setIsInitialSearch(true);
            return;
        }

        setLoading(true);
        if (isInitialSearch) setIsInitialSearch(false);
        try {
            await loadBooks({
                variables: { query },
            });
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async () => {
        if (selectedBook?.userBook?.id) {
            await updateUserBook(
                selectedBook.userBook.id,
                {
                    status: Reading_Status.Reading,
                },
                {
                    refetchQueries: [
                        {
                            query: GetUserBooksDocument,
                            variables: {
                                where: {
                                    status: {
                                        equals: Reading_Status.Reading,
                                    },
                                },
                            },
                        },
                    ],
                }
            );
        }
    };

    const handleClose = () => {
        setSelectedBook(null);
        onClose();
    };

    return (
        <Dialog open={isOpen} onOpenChange={handleClose}>
            <DialogContent className='max-w-2xl'>
                <DialogHeader>
                    <DialogTitle>Add a book to Currently Reading</DialogTitle>
                </DialogHeader>

                <SearchInput
                    value={searchQuery}
                    onChange={(value) => {
                        setSearchQuery(value);
                        handleSearch(value);
                    }}
                />

                <div className='mt-4 max-h-[400px] overflow-y-auto'>
                    {loading && isInitialSearch ? (
                        <LoadingSpinner />
                    ) : hasSearched ? (
                        <div className='grid gap-2'>
                            {books.length > 0 ? (
                                books.map((book) => (
                                    <BookSearchResult
                                        key={book.id}
                                        book={book}
                                        isSelected={selectedBook?.id === book.id}
                                        onSelect={setSelectedBook}
                                    />
                                ))
                            ) : (
                                <NoResults />
                            )}
                            {loading && !isInitialSearch && (
                                <div className="absolute inset-0 flex items-center justify-center bg-white/60 z-10">
                                    <LoadingSpinner />
                                </div>
                            )}
                        </div>
                    ) : null}
                </div>

                <DialogFooter>
                    <Button
                        variant='outline'
                        className='rounded-md'
                        onClick={handleClose}
                    >
                        Cancel
                    </Button>
                    <Button
                        onClick={handleSubmit}
                        disabled={!selectedBook}
                        className='rounded-md bg-beige-700 hover:bg-beige-800'
                    >
                        Add book
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

