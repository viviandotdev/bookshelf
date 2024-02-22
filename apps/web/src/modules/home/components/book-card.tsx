"use client"
import BookCover from '@/components/book-cover';
import { Icons } from '@/components/icons';
import { Card, CardContent } from '@/components/ui/card';
import { UserBook } from '@/graphql/graphql';
import { Edit } from 'lucide-react';
import React, { useState } from 'react'
import EditBookCardMenu from './edit-book-card-menu';
import LogBookButton from '@/modules/layout/components/log-book-button';
import useLogBookModal from '@/components/modals/log-book-modal/use-log-book-modal';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { useJournalEntryModal } from '@/components/modals/journal-entry-modal/use-journal-entry-modal';
import useUserBookStore from '@/stores/use-user-book-store';

import BookActions from '@/components/book-actions';

interface ReadingCardProps {
    userBook: UserBook;
    status: string;
}

export const BookCard: React.FC<ReadingCardProps> = ({ userBook, status: cardStatus }) => {
    const logBookModal = useLogBookModal();
    const journalEntryModal = useJournalEntryModal()
    const { updateBookId, updateStatus, setBook, initShelves } = useUserBookStore();
    const [openDropdown, setOpenDropdown] = useState(false);
    const [status, setStatus] = useState(userBook.status ? userBook.status : "");
    const [rating, setRating] = useState(userBook.rating ? userBook.rating : 0); // Initial value
    if (!userBook) return null;
    const { book, shelves } = userBook;
    return (
        <Card className="w-full cursor-pointer group/item" onMouseLeave={() => {
            setOpenDropdown(false);
        }}>
            <CardContent className="p-2.5 shadow-md relative">
                <div className="flex space-x-4">
                    <BookCover src={book?.coverImage} size={"xs"} />
                    <div className="flex flex-col justify-center" >
                        <div className="flex flex-col">
                            <h3 className="w-56 text-base font-medium text-gray-900 overfconst { journalEntry } = useJournalEntryModal();w-hidden truncate">{book?.title}</h3>
                            <p className="text-sm text-gray-600">{book?.author}</p>
                            <p className="flex items-center text-sm text-gray-500 gap-1">
                                <Icons.read className="h-4 w-4 text-gray-400" />
                                Finished
                            </p>
                            <div className={cn("group/edit hidden group-hover/item:block hover:bg-gray-200 rounded-sm px-1", openDropdown && "block")}>
                                <div className="flex absolute top-2 right-2 shadow-md rounded-md" >
                                    {
                                        cardStatus == "Currently Reading" &&
                                        <Button
                                            onClick={(e) => {
                                                e.stopPropagation();
                                                setBook(book!);
                                                updateStatus(status);
                                                updateBookId(book!.id);
                                                journalEntryModal.onOpen();
                                            }}
                                            variant={"card"}
                                            size={"xs"}
                                            className={cn("px-2 rounded-l-md")}>
                                            <Icons.plus className={`h-4 w-4`} />
                                        </Button>
                                    }
                                    <BookActions
                                        book={book!}
                                        openDropdown={openDropdown}
                                        setOpenDropdown={setOpenDropdown}
                                        status={status}
                                        setStatus={setStatus}
                                        setRating={setRating}
                                        rating={rating}
                                        shelves={shelves!}
                                        trigger={
                                            <Button
                                                variant={"card"}
                                                size={"xs"}
                                                className={cn("px-2 rounded-md")}
                                            >
                                                <a className="">
                                                    <Icons.more className="rotate-90 fill-current h-4 w-4 cursor-pointer stroke-gray-500 stroke-1" />
                                                </a>
                                            </Button>
                                        }
                                    />
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </CardContent>
        </Card>
    );
}
export default BookCard
