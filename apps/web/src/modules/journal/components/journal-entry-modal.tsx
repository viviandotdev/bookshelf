"use client";
import useUserBook from "@/stores/use-user-book";

import { Dispatch, SetStateAction, useEffect } from "react";
import JournalEntryForm from "@/modules/journal/components/journal-entry-form";
import BookCover from "@/components/book-cover";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useGetMostRecentJournalEntryLazyQuery, useGetMostRecentJournalEntryQuery } from "@/graphql/graphql";
import { useJournalEntryModal } from "../hooks/use-journal-entry-modal";
interface JouranlEntryModalProps {
    isOpen: boolean;
    onClose: () => void;
    onDelete?: () => void;
    editId?: string,
    journalEntry?: any;
    setJournalEntry: Dispatch<SetStateAction<any>>;
}

export const JouranlEntryModal: React.FC<JouranlEntryModalProps> = ({
    isOpen,
    onClose,
    editId,
    onDelete,
    journalEntry,
    setJournalEntry
}) => {
    const userBook = useUserBook();
    const onChange = (open: boolean) => {
        if (!open) {
            onClose();
        }
    };
    return (
        <Dialog open={isOpen} onOpenChange={onChange}>
            <DialogContent className="flex min-w-[720px]">
                <div className="flex gap-8 min-w-full">
                    <BookCover src={userBook.data.coverImage} />
                    <div className="flex text-sm flex-col w-[fill-available] justify-between">
                        <DialogHeader>
                            {
                                editId ? (
                                    <DialogTitle className="text-muted-foreground font-light">
                                        Edit Journal Entry
                                    </DialogTitle>
                                ) : (
                                    <DialogTitle className="text-muted-foreground font-light">
                                        Add Journal Entry
                                    </DialogTitle>
                                )
                            }
                            <DialogDescription className="text-black font-medium text-md">
                                {userBook.data.title}
                            </DialogDescription>
                        </DialogHeader>
                        <JournalEntryForm
                            editId={editId}
                            journalEntry={journalEntry}
                            setJournalEntry={setJournalEntry}
                            onDelete={onDelete}
                            onClose={onClose}
                        />
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};
