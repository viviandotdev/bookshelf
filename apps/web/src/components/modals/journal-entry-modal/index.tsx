'use client';
import useUserBookStore from '@/stores/use-user-book-store';
import JournalEntryForm from '@/components/modals/journal-entry-modal/journal-entry-form';
import BookCover from '@/components/book-cover';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';
import { useJournalEntryModal } from './use-journal-entry-modal';
import { Size } from '@/graphql/graphql';
import { getCoverUrl } from '@/lib/utils';

export const JouranlEntryModal: React.FC = ({}) => {
  const userBook = useUserBookStore();
  const journalEntryModal = useJournalEntryModal();
  const onChange = (open: boolean) => {
    if (!open) {
      journalEntryModal.onClose();
    }
  };
  return (
    <>
      {userBook && userBook.book && (
        <Dialog open={journalEntryModal.isOpen} onOpenChange={onChange}>
          <DialogContent className='flex min-w-[720px]'>
            <div className='flex min-w-full gap-8'>
              <BookCover
                src={getCoverUrl(userBook.book, Size.Small)}
                size={'md'}
                className='items-start'
              />
              <div className='flex w-[stretch] flex-col justify-evenly text-sm'>
                <DialogHeader>
                  {journalEntryModal.editId ? (
                    <DialogTitle className='font-light text-gray-500'>
                      Edit Journal Entry
                    </DialogTitle>
                  ) : (
                    <DialogTitle className='font-light text-gray-500'>
                      Add Journal Entry
                    </DialogTitle>
                  )}
                  <DialogDescription className='text-base font-medium text-black'>
                    {userBook.book.title}
                  </DialogDescription>
                </DialogHeader>
                <JournalEntryForm />
              </div>
            </div>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
};
