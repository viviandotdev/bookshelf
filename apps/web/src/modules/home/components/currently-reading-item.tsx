'use client';
import { Size, UserBook } from '@/graphql/graphql';
import React, { useEffect, useState } from 'react';
import useLogBookModal from '@/components/modals/log-book-modal/use-log-book-modal';
import useUserBookStore from '@/stores/use-user-book-store';
import BookCover from '@/components/book-cover';
import { getCoverUrl, cn, formatAuthors } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import useProgressModal from '@/components/modals/progress-modal.tsx/use-progress-modal';

interface CurrentlyReadingItemProps {
  userBook: UserBook;
}

export const CurrentlyReadingItem: React.FC<CurrentlyReadingItemProps> = ({
  userBook,
}) => {
  const progressModal = useProgressModal();
  const { setUserBook } = useUserBookStore();
  if (!userBook) return null;
  const { book, shelves } = userBook;
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
              <Progress className='items-center' value={100} />
              <div className='flex items-center gap-0.5'>{100}%</div>
            </div>
            <div className='flex w-max items-center text-xs font-medium text-gray-500'>
              <div>
                {100} / {book?.pageCount} pages read
              </div>
            </div>
          </div>
        </div>
        <div className='flex justify-end'>
          <Button
            variant={'secondary'}
            onClick={(e) => {
              e.stopPropagation();
              progressModal.onOpen();
              setUserBook({
                userBookId: userBook.id,
                bookTitle: book.title,
              });
            }}
          >
            Update Progress
          </Button>
        </div>
      </div>
    </div>
  );
};
export default CurrentlyReadingItem;
