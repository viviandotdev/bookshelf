'use client';
import React, { useRef, useState } from 'react';
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
import useUserBookStore from '@/stores/use-user-book-store';
import { BookRating } from './book-rating';
import { readingStatuses } from '@/config/books';
import { useUpdateUserBook } from '@/modules/bookshelves/mutations/use-update-user-book';
import { cn } from '@/lib/utils';
import { toast } from '@/hooks/use-toast';
import AddToShelfHandler from '@/modules/shelf/mutations/add-to-shelf-hadnler';
import AlertModal from './modals/alert-modal';
import { ApolloCache } from '@apollo/client';
interface BookActionsProps {
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
    const [openAlert, setOpenAlert] = useState(false); // Initial value
    const { updateUserBook } = useUpdateUserBook({
        onCompleted: (data: UserBook) => {
            toast({
                title: `Book status updated to ${data.status} `,
                variant: 'success',
            });
        },
        onError: (error) => {
            toast({ title: error.message, variant: 'destructive' });
        },
    });
    const onUpdateStatus = async (status: Reading_Status) => {
        setStatus(status);
        await updateUserBook(userBookId as string, { status: status });
    };

    const [removeUserBook] = useRemoveUserBookMutation({
        onCompleted: (_) => {
            toast({
                title: `Book removed from your shelf`,
                variant: 'success',
            });
        },
        //https://www.youtube.com/watch?v=lQ7t20gFR14
        update: (cache: ApolloCache<any>, { data }) => {
            if (data?.removeUserBook) {
                // Evict the deleted book from the cache
                // Construct the cache ID
                const cacheId = cache.identify({
                    __typename: 'UserBook',
                    id: userBookId,
                });

                cache.evict({ id: cacheId });

                // Optionally, update the book count
                // cache.modify({
                //   fields: {
                //     countUserBooks(existingCount = 0) {
                //       return Math.max(0, existingCount - 1);
                //     },
                //   },
                // });
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
                    onMouseLeave={(e) => {
                        e.stopPropagation();
                        setOpenDropdown(false);
                    }}
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
                                    className={`${status === key && 'bg-beige-400 text-beige'}`}
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
                    <DropdownMenuSeparator></DropdownMenuSeparator>

                    <AddToShelfHandler
                        userBookId={userBookId as string}
                        bookTitle={book?.title || ''}
                    >
                        {(handleAddToShelf) => (
                            <DropdownMenuItem
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleAddToShelf();
                                }}
                            >
                                <Icons.shelf className='mr-2 h-5 w-5' />
                                Add to shelf
                            </DropdownMenuItem>
                        )}
                    </AddToShelfHandler>
                    {/* {status == Reading_Status.Reading && (
            <DropdownMenuItem
              onClick={(e) => {
                e.stopPropagation();
                setUserBook({
                  userBookId: userBookId,
                  status: status,
                  book: book,
                });
              }}
            >
              <Icons.plus className='mr-2 h-5 w-5' />
              Log reading
            </DropdownMenuItem>
          )} */}

                    {showRemoveBook && (
                        <DropdownMenuItem
                            onClick={(e) => {
                                e.stopPropagation();
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
