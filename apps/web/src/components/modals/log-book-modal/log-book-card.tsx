'use client'
import { dm_sefif_display } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import React, { useEffect, useReducer, useState } from 'react'
import BookCover from '../../book-cover';
import { CardDescription } from '../../ui/card';
import { UserBook } from '@/graphql/graphql';
import useLogBookModal from '@/components/modals/log-book-modal/use-log-book-modal';
import { useJournalEntryModal } from '@/components/modals/journal-entry-modal/use-journal-entry-modal';
import useUserBook from '@/stores/use-user-book';

interface LogBookCardProps {
    userBook: UserBook;
    setJournalEntry: any;

}

export const LogBookCard: React.FC<LogBookCardProps> = ({ userBook }) => {
    const logBookModal = useLogBookModal()
    const journalEntryModal = useJournalEntryModal()
    const setUserBook = useUserBook((state) => state.setUserBook);
    const setJournalEntry = useJournalEntryModal((state) => state.setJournalEntry);

    return (
        <div
            className="flex gap-4 cursor-pointer"
            onClick={(e) => {
                e.stopPropagation();
                logBookModal.onClose()
                setUserBook(userBook.book)

                journalEntryModal.onOpen();

            }}>
            <BookCover size={"xs"} src={userBook.book?.coverImage} />
            <div className="flex-col">
                <div className={cn(dm_sefif_display.className, "text-[18px]")}>
                    {userBook.book?.title}
                </div>
                <CardDescription className="text-sm line-clamp-1">
                    by {userBook.book?.author}
                </CardDescription>

            </div>
        </div>
    );
}
export default LogBookCard
