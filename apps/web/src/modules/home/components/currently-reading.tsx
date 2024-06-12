'use client';
import { Size, UserBook } from '@/graphql/graphql';
import React, { useEffect, useState } from 'react';
import useLogBookModal from '@/components/modals/log-book-modal/use-log-book-modal';
import { useJournalEntryModal } from '@/components/modals/journal-entry-modal/use-journal-entry-modal';
import useUserBookStore from '@/stores/use-user-book-store';
import BookCover from '@/components/book-cover';
import { dm_sefif_display } from '@/lib/fonts';
import { getCoverUrl, cn, formatAuthors } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import useLoadJournalEntry from '@/modules/journal/queries/use-load-entry';
import { Bokor } from 'next/font/google';

interface CurrentlyReadingProps {
  userBook: UserBook;
}

export const CurrentlyReading: React.FC<CurrentlyReadingProps> = ({
  userBook,
}) => {
  const logBookModal = useLogBookModal();
  const journalEntryModal = useJournalEntryModal();
  const { updateBookId, updateStatus, setBook, initShelves } =
    useUserBookStore();
  const [status, setStatus] = useState(userBook.status ? userBook.status : '');
  if (!userBook) return null;
  const { book, shelves } = userBook;
  const { setJournalEntry, journalEntry } = useJournalEntryModal();
  const loadEntry = useLoadJournalEntry(setJournalEntry);
  const { percent, page } = journalEntry;

  useEffect(() => {
    // Fetch most recent entry if adding new journal entry
    const loadData = async () => {
      await loadEntry({
        variables: {
          book: {
            id: book && book.id,
          },
        },
      });
    };
    loadData();
  }, [loadEntry]);
  return (
    <div className='flex justify-between'>
      <div className='flex gap-4 border-gray-100 p-2'>
        <div className='flex flex-col gap-1'>
          <div className='flex gap-4'>
            <BookCover src={getCoverUrl(book, Size.Small)} size={'xxs'} />
            <div className='space-y-1'>
              <h2
                className={cn(
                  'text-lg  font-semibold leading-4 text-beige-700 '
                )}
              >
                {book.title}
              </h2>
              <div className='flex items-center gap-2'>
                <p className='text-sm text-gray-400'>
                  by {formatAuthors(book.authors!)}
                </p>
                <div className='flex items-center'></div>
              </div>
            </div>
          </div>

          <div className='flex items-center font-medium'>
            <span className='text-sm text-gray-700'></span>
          </div>
        </div>
      </div>
      <div className='flex justify-end gap-4 p-2'>
        <div>
          <div className='flex min-w-[19em] flex-col gap-[-2px] px-2 text-sm'>
            <div className='flex min-w-36 items-center justify-center gap-2 text-center text-beige'>
              <Progress className='items-center' value={percent} />
              <div className='flex items-center gap-0.5'>{percent}%</div>
            </div>
            <div className='flex w-max items-center text-xs font-medium text-gray-500'>
              <div>
                {page} / {book?.pageCount} pages read
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-end'>
          <Button
            variant={'secondary'}
            onClick={(e) => {
              e.stopPropagation();
              setBook(book!);
              updateStatus(status);
              updateBookId(book!.id);
              journalEntryModal.onOpen();
            }}
          >
            Update Progress
          </Button>
        </div>
      </div>
    </div>
  );
};
export default CurrentlyReading;
