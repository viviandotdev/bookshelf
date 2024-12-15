'use client';
import { Progress_Type, Size, UserBook } from '@/graphql/graphql';
import React from 'react';
import useUserBookStore from '@/stores/use-user-book-store';
import BookCover from '@/components/book-cover';
import { getCoverUrl, cn, formatAuthors } from '@/lib/utils';

import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import useProgressModal from '@/components/modals/progress-modal.tsx/use-progress-modal';
import { Pencil } from 'lucide-react';
import { IconButton } from '@/modules/bookshelves/components/icon-button';

interface CurrentlyReadingItemProps {
  userBook: UserBook;
}

const convertPercentProgressToPages = (
  percentProgress: number,
  capacity: number
) => {
  return Math.round((percentProgress / 100) * capacity);
};
const covertPageProgressToPercent = (
  pageProgress: number,
  capacity: number
) => {
  return Math.round((pageProgress / capacity) * 100);
};

export const CurrentlyReadingItem: React.FC<CurrentlyReadingItemProps> = ({
  userBook,
}) => {
  const { onOpen, readDates } = useProgressModal();
  const { setUserBook } = useUserBookStore();
  const readDate = readDates.find((rd) => rd.userBookId === userBook.id);
  const type = readDate?.readingProgress?.type;
  const capacity = readDate?.readingProgress?.capacity;

  const percentProgress =
    type == Progress_Type.Percentage
      ? readDate?.readingProgress?.progress
      : covertPageProgressToPercent(
          readDate?.readingProgress?.progress || 0,
          capacity || 0
        );

  const pageProgress =
    type == Progress_Type.Pages
      ? readDate?.readingProgress?.progress
      : convertPercentProgressToPages(
          readDate?.readingProgress?.progress || 0,
          capacity || 0
        );

  const { book } = userBook;
  return (
    <>
      <div className='border-grey-200 flex flex-row gap-4 rounded-md border bg-white p-4 transition duration-300'>
        <div className='w-20 flex-shrink-0 overflow-hidden rounded-md shadow-sm'>
          <BookCover src={getCoverUrl(book, Size.Small)} size={'sm'} />
        </div>
        <div className='flex w-full flex-col justify-between'>
          <div className='flex w-full flex-col gap-1'>
            <div className='line-clamp-2 overflow-hidden text-base font-medium text-stone-700'>
              {book.title}
            </div>
            <div className='line-clamp-1 overflow-hidden text-xs text-gray-400'>
              by {formatAuthors(book.authors!)}
            </div>
            <div className='line-clamp-1 overflow-hidden text-xs text-gray-400'>
              Started on December 12, 2021
            </div>
            {/* <RatingInfo size={'sm'} ratings={hit?.ratings || []} /> */}
          </div>

          <div className='mt-1 flex flex-col '>
            <div className='flex items-center justify-between gap-2'>
              <div className='h-fit w-[85%] rounded-md border border-gray-200 bg-white px-2 py-2 text-center text-beige shadow-sm'>
                <div className='flex items-center gap-1'>
                  <Progress
                    className='align-middle'
                    value={percentProgress || 0}
                  />
                  <div className='ml-2 min-w-2 text-xs font-medium text-gray-500'>
                    {percentProgress || 0}%
                  </div>
                </div>
              </div>

              <IconButton
                onClick={(e) => {
                  e.stopPropagation();
                  if (readDate?.readingProgress) {
                    onOpen();
                    setUserBook({
                      userBookId: userBook.id,
                      bookTitle: book.title,
                    });
                  }
                }}
                className={`h-8 w-8 rounded-sm`}
              >
                <span className='sr-only'>Like Book</span>
                <Pencil className={`h-4 w-4 items-center`} />
              </IconButton>
              {/* <Button
                variant={'secondary'}
                className='flex h-8 w-8 items-center justify-center border p-0'
                onClick={(e) => {
                  e.stopPropagation();
                  if (readDate?.readingProgress) {
                    onOpen();
                    setUserBook({
                      userBookId: userBook.id,
                      bookTitle: book.title,
                    });
                  }
                }}
              >
                <Pencil height={16} />
              </Button> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CurrentlyReadingItem;
