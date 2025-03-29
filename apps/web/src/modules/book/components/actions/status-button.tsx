'use client';
import { Icons } from '@/components/icons';
import useBookStatusModal from '@/components/modals/book-status-modal/use-book-status-modal';
import { Button } from '@/components/ui/button';
import { readingStatuses } from '@/config/books';
import {
    BookDataInput,
    Reading_Status,
    UserBook,
    useBookCountsByUserIdLazyQuery,
    useCreateUserBookMutation,
} from '@/graphql/graphql';
import useUserBookStore from '@/stores/use-user-book-store';
import React, { useEffect } from 'react';
import { useSession } from 'next-auth/react';
import ContentLoader from 'react-content-loader';
import { BookData } from '@/modules/bookshelves/types';
import { toast } from '@/hooks/use-toast';
interface StatusButtonProps {
    book: BookData;
    targetBook?: UserBook;
}

export const StatusButton: React.FC<StatusButtonProps> = ({
    targetBook,
    book,
}) => {
    const statusModal = useBookStatusModal();
    const { data } = useSession();
    const { status, setUserBook, resetStore, isInLibrary } = useUserBookStore();


    const [bookCountsByUserId] = useBookCountsByUserIdLazyQuery({
        onCompleted: (data) => {
            statusModal.setBookCounts(data.bookCountsByUserId);
        },
    });

    const [createUserBook] = useCreateUserBookMutation({
        onCompleted: (data) => {
            toast({
                title: 'Book added to your library',
                variant: 'success',
            });
            setUserBook({
                userBookId: data.createUserBook.id,
            });
        },
        onError: (error) => {
            resetStore();
            console.error(error);
        },
    });

    useEffect(() => {
        if (targetBook) {
            setUserBook({ status: targetBook!.status });
        }
    }, [targetBook, setUserBook]);

    const handleExistingUserBookClick = async () => {
        if (isInLibrary) {
            statusModal.onOpen();
            statusModal.setIsLoading(true);
            await bookCountsByUserId({
                variables: { userId: data?.user.id },
            });
            statusModal.setIsLoading(false);
        }
    };

    const handleNewUserBookClick = async () => {
        // Filter the book object to only include properties defined n BookDataInput
        setUserBook({
            isInLibrary: true,
            status: Reading_Status.WantToRead,
            shelves: [],
            isLiked: false,
            isOwned: false,
            rating: 0,
        });
        await createUserBook({
            variables: {
                data: {
                    title: book.title,
                    subtitle: book.subtitle,
                    authors: book.authors,
                    pageCount: book.pageCount,
                    yearPublished: book.yearPublished,
                    ratings: book.ratings.map((rating) => ({
                        source: rating.source,
                        score: rating.score,
                        maxScore: rating.maxScore,
                    })),
                    covers: book.covers.map((cover) => ({
                        url: cover.url,
                        size: cover.size,
                        source: cover.source,
                    })),
                    identifiers: book.identifiers.map((identifier) => ({
                        source: identifier.source,
                        sourceId: identifier.sourceId,
                    })),
                },
            },
        });
    };

    return (
        <>
            {isInLibrary ? (
                <>
                    {status ? (
                        <Button
                            onClick={handleExistingUserBookClick}
                            variant='secondary'
                            className='w-[160px] gap-2 rounded-lg font-normal shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border hover:border-beige-700 hover:bg-beige-100'
                        >
                            <Icons.save className='h-5 w-5' />
                            <div>{readingStatuses[status as Reading_Status]?.name}</div>
                        </Button>
                    ) : (
                        <>
                            <ContentLoader
                                uniqueKey='shelf-title-loader'
                                speed={2}
                                width={160}
                                height={40}
                                backgroundColor='#f7f2ee'
                            >
                                <rect rx='5' ry='5' width='160px' height='40' />
                            </ContentLoader>
                        </>
                    )}
                </>
            ) : (
                <Button
                    onClick={handleNewUserBookClick}
                    variant='outline'
                    className='gap-2 rounded-lg font-normal'
                >
                    <Icons.save className='h-5 w-5' />
                    <div>{readingStatuses[Reading_Status.WantToRead].name}</div>
                </Button>
            )}
        </>
    );
};

export default StatusButton;
