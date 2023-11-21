'use client'
import { dm_sefif_display } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import React, { useEffect, useReducer, useState } from 'react'
import BookCover from '../book-cover';
import { CardDescription } from '../ui/card';
import { UserBook } from '@/graphql/graphql';
import { JouranlEntryModal } from '@/modules/journal/components/journal-entry-modal';
import useLogBookModal from '@/hooks/use-log-book-modal';

interface LogBookCardProps {
    userBook: UserBook;
    // openEntryModal: boolean;
    // setOpenEntryModal: (open: boolean) => void;

}

export const LogBookCard: React.FC<LogBookCardProps> = ({ userBook, }) => {
    const logBookModal = useLogBookModal()
    const [openEntryModal, setOpenEntryModal] = useState(false)
    const [journalEntry, setJournalEntry] = useReducer((prev: any, next: any) => {
        return { ...prev, ...next }
    }, {
        originalPage: 0,
        originalPercent: 0,
        page: 0,
        percent: 0,
        notes: "",
        date: new Date(),
    })
    useEffect(() => {
        if (userBook.journalEntry && userBook.journalEntry.length > 0) {
            setJournalEntry({
                originalPage: userBook.journalEntry[0].currentPage || 0,
                originalPercent: userBook.journalEntry[0].currentPercent || 0,
                page: userBook.journalEntry[0].currentPage || 0,
                percent: userBook.journalEntry[0].currentPercent || 0,
            });
        }
    }, [userBook]);
    return (
        <div onClick={() => {
            console.log("cleck")
            logBookModal.onClose()
            setOpenEntryModal(true)

        }}>
            <JouranlEntryModal
                journalEntry={journalEntry}
                setJournalEntry={setJournalEntry}
                isOpen={openEntryModal}
                onClose={() => setOpenEntryModal(false)}
            />
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
