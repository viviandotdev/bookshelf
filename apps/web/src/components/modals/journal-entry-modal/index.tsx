"use client";
import useUserBookStore from "@/stores/use-user-book-store";
import JournalEntryForm from "@/components/modals/journal-entry-modal/journal-entry-form";
import BookCover from "@/components/book-cover";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useJournalEntryModal } from "./use-journal-entry-modal";

export const JouranlEntryModal: React.FC = ({

}) => {
    const userBook = useUserBookStore();
    const journalEntryModal = useJournalEntryModal();
    const onChange = (open: boolean) => {
        if (!open) {
            journalEntryModal.onClose();
        }
    };
    return (
        <>
            {userBook && userBook.book &&
                < Dialog open={journalEntryModal.isOpen} onOpenChange={onChange}>
                    <DialogContent className="flex min-w-[720px]">
                        <div className="flex gap-8 min-w-full">
                            <BookCover src={userBook.book.coverImage} />
                            <div className="flex text-sm flex-col w-[fill-available] justify-evenly">
                                <DialogHeader>
                                    {
                                        journalEntryModal.editId ? (
                                            <DialogTitle className="text-gray-500 font-light">
                                                Edit Journal Entry
                                            </DialogTitle>
                                        ) : (
                                            <DialogTitle className="text-gray-500 font-light">
                                                Add Journal Entry
                                            </DialogTitle>
                                        )
                                    }
                                    <DialogDescription className="text-black font-medium text-base">
                                        {userBook.book.title}
                                    </DialogDescription>
                                </DialogHeader>
                                <JournalEntryForm />
                            </div>
                        </div>
                    </DialogContent>
                </Dialog>
            }
        </>
    );
};
