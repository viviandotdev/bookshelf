'use client';
import React, { useEffect, useRef } from 'react';
import { Icons } from './icons';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from './ui/dropdown-menu';
import { Book, UserBookShelves } from '../graphql/graphql';
import useAddToShelfModal from '@/components/modals/add-to-shelf-modal/use-add-to-shelf-modal';
import useUserBookStore from '@/stores/use-user-book-store';
import { BookRating } from './book-rating';
import { bookStatuses } from '@/config/books';
import { useJournalEntryModal } from '@/components/modals/journal-entry-modal/use-journal-entry-modal';
import { useUpdateUserBook } from '@/modules/bookshelves/mutations/use-update-user-book';
import Link from 'next/link';
interface BookActionsProps {
    book: Book | undefined;
    shelves: UserBookShelves[] | undefined;
    openDropdown: boolean;
    rating: number;
    status: string;
    showRemoveBook?: boolean;
    setStatus: React.Dispatch<React.SetStateAction<string>>;
    setRating: React.Dispatch<React.SetStateAction<number>>;
    setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>;
    setOpenDropdown: React.Dispatch<React.SetStateAction<boolean>>;
    moveCard?: (status: string) => void;
    trigger: React.ReactNode;
    side?: 'top' | 'bottom';
    align?: 'start' | 'end';
}

const BookActions: React.FC<BookActionsProps> = ({
    book,
    rating,
    status,
    shelves,
    moveCard,
    openDropdown,
    showRemoveBook,
    setStatus,
    setOpenAlert,
    setRating,
    setOpenDropdown,
    trigger,
    side = 'top',
    align = 'start',
}) => {
    const addToShelfModal = useAddToShelfModal();
    const { updateBookId, updateStatus, setBook, initShelves } =
        useUserBookStore();
    const setShelves = useAddToShelfModal((state) => state.setShelves);
    const { updateUserBook } = useUpdateUserBook();
    const journalEntryModal = useJournalEntryModal();
    const onUpdate = async (status: string) => {
        // optimistic update
        setStatus(status);
        await updateUserBook(parseInt(book!.id), { status });
    };
    const linkRef = useRef<HTMLAnchorElement>(null);
    return (
        <>
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
                    {bookStatuses.map((item) => (
                        <DropdownMenuItem
                            key={item.name}
                            className={`${status === item.name && 'bg-beige-400 text-beige'}`}
                            onClick={(e) => {
                                e.stopPropagation();
                                onUpdate(item.name);
                                if (moveCard) {
                                    moveCard(item.name)
                                    setOpenDropdown(false);
                                }
                            }}
                        >
                            {/* <item.icon className='mr-2 h-5 w-5' /> */}
                            {item.name}
                        </DropdownMenuItem>
                    ))}
                    <DropdownMenuSeparator></DropdownMenuSeparator>
                    <DropdownMenuItem>
                        <div className='flex gap-2'>
                            My Rating:
                            <BookRating
                                bookId={book!.id}
                                rating={rating}
                                setRating={setRating}
                            />
                        </div>
                    </DropdownMenuItem>
                    <DropdownMenuItem
                        onClick={(e) => {
                            e.stopPropagation();
                            // Shelves this part is part of
                            initShelves(shelves!);
                            setShelves(shelves!);
                            updateBookId(book!.id);
                            addToShelfModal.onOpen();
                        }}
                    >
                        <Icons.shelf className='mr-2 h-5 w-5' />
                        Add to shelf
                    </DropdownMenuItem>
                    {status == 'Currently Reading' && (
                        <DropdownMenuItem
                            onClick={(e) => {
                                e.stopPropagation();
                                setBook(book!);
                                updateStatus(status);
                                updateBookId(book!.id);
                                journalEntryModal.onOpen();
                            }}
                        >
                            <Icons.plus className='mr-2 h-5 w-5' />
                            Log reading
                        </DropdownMenuItem>
                    )}

                    <DropdownMenuItem
                        onClick={(e) => {
                            e.stopPropagation();
                            if (linkRef.current) {
                                linkRef.current.click();
                            }
                        }}
                    >
                        <Icons.view className='mr-2 h-5 w-5' />
                        Show your activity
                        <Link
                            ref={linkRef}
                            href={`/book/${book?.id}/activity`}
                            className='hidden'
                        ></Link>
                    </DropdownMenuItem>

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
