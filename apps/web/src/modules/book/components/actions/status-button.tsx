'use client';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { readingStatuses } from '@/config/books';
import {
    BookDataInput,
    Reading_Status,
    UserBook,
    useBookCountsByUserIdLazyQuery,
    useCreateUserBookMutation,
    useRemoveUserBookMutation,
} from '@/graphql/graphql';
import useUserBookStore from '@/stores/use-user-book-store';
import React, { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import ContentLoader from 'react-content-loader';
import { BookData } from '@/modules/bookshelves/types';
import { toast } from '@/hooks/use-toast';
import { useUpdateUserBook } from '@/modules/bookshelves/mutations/use-update-user-book';
import StatusDropdown from './status-dropdown';
import { ApolloCache } from '@apollo/client';
import AlertModal from '@/components/modals/alert-modal';
import { useRouter } from 'next/navigation';

interface StatusButtonProps {
    book: BookData;
    targetBook?: UserBook;
}

export const StatusButton: React.FC<StatusButtonProps> = ({
    targetBook,
    book,
}) => {
    const { data } = useSession();
    const { status, setUserBook, resetStore, isInLibrary, userBookId } = useUserBookStore();
    const [openAlert, setOpenAlert] = useState(false);
    const router = useRouter();

    const [bookCountsByUserId] = useBookCountsByUserIdLazyQuery({
        onCompleted: (data) => {
            // Handle book counts if needed
        },
    });

    const [removeUserBook] = useRemoveUserBookMutation({
        onCompleted: (_) => {
            toast({
                title: `Book removed from your shelf`,
                variant: 'success',
            });
            resetStore();
        },
        update: (cache: ApolloCache<any>, { data }) => {
            if (data?.removeUserBook) {
                // Evict the deleted book from the cache
                const cacheId = cache.identify({
                    __typename: 'UserBook',
                    id: userBookId,
                });

                cache.evict({ id: cacheId });
            }
            // redirect the user to home
            router.push('/');
        },
        onError: (error) => {
            toast({ title: error.message, variant: 'destructive' });
        },
    });

    const { updateUserBook } = useUpdateUserBook({
        onCompleted: (_) => {
            toast({
                title: `Book status updated`,
                variant: 'success',
            });
        },
        onError: (error) => {
            toast({ title: error.message, variant: 'destructive' });
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

    const handleStatusChange = async (newStatus: Reading_Status) => {
        if (isInLibrary && userBookId) {
            await updateUserBook(userBookId, {
                status: newStatus,
            });
            setUserBook({ status: newStatus });
        }
    };

    const handleRemoveBook = () => {
        setOpenAlert(true);
    };

    const onDelete = async () => {
        if (isInLibrary && userBookId) {
            await removeUserBook({
                variables: { where: { id: userBookId } },
            });
        }
        setOpenAlert(false);
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
            <AlertModal
                title={'Are you sure you want to remove this book from your shelf?'}
                description={
                    'Removing this book will clear associated ratings, reading progress and status'
                }
                isOpen={openAlert}
                onClose={() => setOpenAlert(false)}
                onConfirm={onDelete}
                loading={false}
            />
            {isInLibrary ? (
                <>
                    {status ? (
                        <StatusDropdown
                            currentStatus={status as Reading_Status}
                            onStatusChange={handleStatusChange}
                            onRemoveBook={handleRemoveBook}
                        />
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
                // Button to add a book to the user's library with "Want to Read" status
                // When clicked, it creates a new user book entry and sets initial status
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
