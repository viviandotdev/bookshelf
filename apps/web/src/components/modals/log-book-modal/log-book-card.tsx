'use client';
import { dm_sefif_display } from '@/lib/fonts';
import { cn, formatAuthors, getCoverUrl } from '@/lib/utils';
import React, { useEffect, useReducer, useState } from 'react';
import BookCover from '../../book-cover';
import { CardDescription } from '../../ui/card';
import { Size, UserBook } from '@/graphql/graphql';
import useLogBookModal from '@/components/modals/log-book-modal/use-log-book-modal';

interface LogBookCardProps {
  userBook: UserBook;
}

export const LogBookCard: React.FC<LogBookCardProps> = ({ userBook }) => {
  const logBookModal = useLogBookModal();

  return (
    <div
      className='flex cursor-pointer gap-4'
      onClick={(e) => {
        e.stopPropagation();
        logBookModal.onClose();
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
