'use client';
import { dm_sefif_display } from '@/lib/fonts';
import { cn, formatAuthors, getCoverUrl } from '@/lib/utils';
import React, { useEffect, useReducer, useState } from 'react';
import BookCover from '../../book-cover';
import { CardDescription } from '../../ui/card';
import { Size, UserBook } from '@/graphql/graphql';
import useLogBookModal from '@/components/modals/log-book-modal/use-log-book-modal';
import { Button } from '@/components/ui/button';
import useUserBookStore from '@/stores/use-user-book-store';
import useProgressModal from '../progress-modal.tsx/use-progress-modal';

interface LogBookCardProps {
  userBook: UserBook;
}

export const LogBookCard: React.FC<LogBookCardProps> = ({ userBook }) => {
  const logBookModal = useLogBookModal();
  const progressModal = useProgressModal();
  const { setUserBook } = useUserBookStore();
  return (
    <div
      className='flex w-full cursor-pointer gap-4 rounded-md bg-white p-2 text-black hover:bg-gray-100'
      onClick={(e) => {
        e.stopPropagation();
        logBookModal.onClose();
        progressModal.onOpen();
        setUserBook({
          userBookId: userBook.id,
          bookTitle: userBook.book.title,
        });
      }}
    >
      <BookCover size={'xs'} src={getCoverUrl(userBook.book, Size.Small)} />
      <div className='flex-col'>
        <div className={cn(dm_sefif_display.className, 'text-xl')}>
          {userBook.book?.title}
        </div>
        <CardDescription className='line-clamp-1 text-sm'>
          by {formatAuthors(userBook.book.authors!)}
        </CardDescription>
      </div>
    </div>
  );
};
export default LogBookCard;
