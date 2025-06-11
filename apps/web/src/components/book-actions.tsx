'use client';
import React, { useState } from 'react';
import { Icons } from './icons';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';
import {
    Book,
    Reading_Status,
    UserBook,
    useRemoveUserBookMutation,
} from '../graphql/graphql';
import { readingStatuses } from '@/config/books';
import { useUpdateUserBook } from '@/modules/bookshelves/mutations/use-update-user-book';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';
import AddToShelfHandler from '@/modules/shelf/mutations/add-to-shelf-hadnler';
import AlertModal from './modals/alert-modal';
import { ApolloCache } from '@apollo/client';
import useUserBookStore from '@/stores/use-user-book-store';

interface BookActionsProps {
    targetBook?: UserBook;
    book: Book | undefined;
    openDropdown: boolean;
    status: Reading_Status;
    showRemoveBook?: boolean;
    setStatus: React.Dispatch<React.SetStateAction<string>>;
    setOpenDropdown: React.Dispatch<React.SetStateAction<boolean>>;
    trigger: React.ReactNode;
    side?: 'top' | 'bottom';
    align?: 'start' | 'end';
    userBookId?: string;
}

const BookActions: React.FC<BookActionsProps> = ({
    userBookId,
    targetBook,
    book,
    status,
    openDropdown,
    showRemoveBook,
    setStatus,
    setOpenDropdown,
    trigger,
    side = 'top',
    align = 'start',
}) => {
    const [openAlert, setOpenAlert] = useState(false);

    const { updateUserBook } = useUpdateUserBook({
        onCompleted: (data: UserBook) => {
            toast({
                title: `${data.book.title} has been updated`,
                variant: 'success'
            });
            setOpenDropdown(false);
        },
        onError: (error) => {
            toast({ title: error.message, variant: 'destructive' });
        },
    });

    const onUpdateStatus = async (newStatus: Reading_Status) => {
        setStatus(newStatus);
        await updateUserBook(userBookId as string, { status: newStatus });
    };

    const [removeUserBook] = useRemoveUserBookMutation({
        onCompleted: (data) => {
            toast({
                title: `${book?.title} has been removed`,
                variant: 'success',
            });

        },
        update: (cache: ApolloCache<any>, { data }) => {
            if (data?.removeUserBook) {
                const cacheId = cache.identify({
                    __typename: 'UserBook',
                    id: userBookId,
                });
                if (cacheId) {
                    cache.evict({ id: cacheId });
                    cache.gc();
                }
            }

        },

        onError: (error) => {
            toast({ title: error.message, variant: 'destructive' });
        },
    });

    const onDelete = async () => {
        await removeUserBook({
            variables: { where: { id: userBookId } },
        });
        setOpenAlert(false);
    };

    const {
        setUserBook,
    } = useUserBookStore();

    return (
        <>
            <AlertModal
                title="Are you sure you want to remove this book from your shelf?"
                description="Removing this book will clear associated ratings, reading progress and status"
                isOpen={openAlert}
                onClose={() => setOpenAlert(false)}
                onConfirm={onDelete}
                loading={false}
            />
            <DropdownMenu open={openDropdown} modal={false}>
                <DropdownMenuTrigger
                    asChild
                    onClick={(e) => {
                        e.stopPropagation();
                        setOpenDropdown(!openDropdown);
                    }}
                >
                    {trigger}
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    align={align}
                    sideOffset={8}
                    side={side}
                    className='w-56'
                >
                    <>
                        {Object.keys(readingStatuses).map((key) => {
                            const item = readingStatuses[key as Reading_Status] as {
                                name: string;
                                icon?: any;
                            };
                            return (
                                <DropdownMenuItem
                                    key={key}
                                    className={cn(
                                        'cursor-pointer',
                                        status === key && 'bg-beige-400 text-beige'
                                    )}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        onUpdateStatus(key as Reading_Status);
                                    }}
                                >
                                    {item.icon && (
                                        <item.icon
                                            className={cn(
                                                'mr-2 h-4 w-4',
                                                key === status ? 'opacity-100' : 'opacity-60'
                                            )}
                                        />
                                    )}
                                    {item.name}
                                </DropdownMenuItem>
                            );
                        })}
                    </>
                    <DropdownMenuSeparator />

                    <AddToShelfHandler
                        userBookId={userBookId as string}
                        bookTitle={book?.title || ''}
                    >
                        {(handleAddToShelf) => (
                            <DropdownMenuItem
                                onClick={(e) => {
                                    e.stopPropagation();
                                    const myShelves = targetBook?.shelves?.filter(
                                        ({ shelf }) => shelf.name !== 'Owned' && shelf.name !== 'Favorites'
                                    );
                                    setUserBook({
                                        userBookId: targetBook!.id,
                                        bookTitle: book?.title,
                                        shelves: myShelves,
                                    });
                                    handleAddToShelf();
                                    setOpenDropdown(false);
                                }}
                            >
                                <Icons.shelf className='mr-2 h-5 w-5' />
                                Add to shelf
                            </DropdownMenuItem>
                        )}
                    </AddToShelfHandler>

                    {showRemoveBook && (
                        <DropdownMenuItem
                            onClick={(e) => {
                                e.stopPropagation();
                                setOpenDropdown(false);
                                setOpenAlert(true);

                            }}
                        >
                            <Icons.delete className='mr-2 h-5 w-5' />
                            Remove...
                        </DropdownMenuItem>
                    )}
                </DropdownMenuContent>
            </DropdownMenu>
        </>
    );
};

export default BookActions;
