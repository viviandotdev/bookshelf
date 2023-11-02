"use client";
import useUserBook from "@/stores/use-user-book";

import { Dispatch, SetStateAction, useState } from "react";
import { useGetMostRecentJournalEntryQuery } from "../../../../graphql/graphql";
import JournalEntryForm from "@/modules/journal/components/journal-entry-form";
import BookCover from "@/components/book-cover";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";

interface JouranlEntryModalProps {
    isOpen: boolean;
    onClose: () => void;
    status: string;
    setStatus: Dispatch<SetStateAction<string>>;
}

export const JouranlEntryModal: React.FC<JouranlEntryModalProps> = ({
    isOpen,
    onClose,
    status,
    setStatus
}) => {
    const userBook = useUserBook();
    const [currentProgress, setCurrentProgress] = useState({
        originalPage: 0,
        originalPercent: 0,
        page: 0,
        percent: 0,
    });

    useGetMostRecentJournalEntryQuery({
        variables: {
            book: {
                id: userBook.data.id,
            },
        },
        onCompleted(data) {
            if (data.getMostRecentJournalEntry) {
                setCurrentProgress({
                    originalPage: data.getMostRecentJournalEntry.currentPage || 0,
                    originalPercent: data.getMostRecentJournalEntry.currentPercent || 0,
                    page: data.getMostRecentJournalEntry.currentPage || 0,
                    percent: data.getMostRecentJournalEntry.currentPercent || 0,
                });
            } else {
                setCurrentProgress({
                    originalPage: 0,
                    originalPercent: 0,
                    page: 0,
                    percent: 0,
                });
            }
        },
    });

    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };

    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent className="flex min-w-[720px]">
                <div className="flex gap-8 min-w-full">
                    <BookCover src={null} />
                    <div className="flex text-sm flex-col w-[fill-available] justify-between">
                        <DialogHeader>
                            <DialogTitle className="text-muted-foreground font-light">
                                I read...
                            </DialogTitle>
                            <DialogDescription className="text-black font-medium">
                                {userBook.data.title}
                            </DialogDescription>
                        </DialogHeader>
                        <JournalEntryForm
                            currentProgress={currentProgress}
                            setCurrentProgress={setCurrentProgress}
                            status={status}
                            setStatus={setStatus}
                            onClose={onClose}
                        />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
