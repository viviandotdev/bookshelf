"use client";
import useUserBook from "@/src/hooks/use-user-book";
import useJouranlEntryModal from "@/src/hooks/use-journal-entry-modal";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "../ui/dialog";
import BookCover from "../book-cover";
import { useState } from "react";
import { useGetMostRecentJournalEntryQuery } from "@/src/graphql/graphql";
import JournalEntryForm from "./journal-entry-form";

interface AddToShelfModalProps {}

export const JouranlEntryModal: React.FC<AddToShelfModalProps> = () => {
  const jouranlEntryModal = useJouranlEntryModal();
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
      jouranlEntryModal.onClose();
    }
  };

  return (
    <Dialog open={jouranlEntryModal.isOpen} onOpenChange={onChange}>
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
              bookStatus={userBook.status}
            />
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};
