'use client';
import { dm_sefif_display } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import React, { useEffect, useReducer, useState } from 'react';
import BookCover from '../../book-cover';
import { CardDescription } from '../../ui/card';
import { UserBook } from '@/graphql/graphql';
import useLogBookModal from '@/components/modals/log-book-modal/use-log-book-modal';
import { useJournalEntryModal } from '@/components/modals/journal-entry-modal/use-journal-entry-modal';
import useUserBookStore from '@/stores/use-user-book-store';

interface LogBookCardProps {
  userBook: UserBook;
  setJournalEntry: any;
}

export const LogBookCard: React.FC<LogBookCardProps> = ({ userBook }) => {
  const logBookModal = useLogBookModal();
  const journalEntryModal = useJournalEntryModal();
  const setBook = useUserBookStore((state) => state.setBook);

  return (
    <div
      className='flex cursor-pointer gap-4'
      onClick={(e) => {
        e.stopPropagation();
        logBookModal.onClose();
        setBook(userBook.book);
        journalEntryModal.onOpen();
      }}
    >
      <BookCover size={'xs'} src={userBook.book?.coverImage} />
      <div className='flex-col'>
        <div className={cn(dm_sefif_display.className, 'text-xl')}>
          {userBook.book?.title}
        </div>
        <CardDescription className='line-clamp-1 text-sm'>
          by {userBook.book?.author}
        </CardDescription>
      </div>
    </div>
  );
};
export default LogBookCard;
