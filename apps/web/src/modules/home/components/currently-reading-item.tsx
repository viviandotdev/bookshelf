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
        <div className='flex flex-col gap-1'>
          <div className='line-clamp-2 overflow-hidden text-base font-medium text-stone-700'>
            {book.title}
          </div>
          <div className='line-clamp-1 overflow-hidden text-xs text-gray-400'>
            by {formatAuthors(book.authors!)}
            {/* {hit.yearPublished} */}
          </div>
          <div className='mt-1 flex'>
            <div className='flex items-center'>
              <div>
                <div className='flex min-w-[19em] flex-col gap-[-2px] text-sm'>
                  <div className='flex min-w-36 items-center justify-center gap-2  px-2 text-center text-beige'>
                    <Progress
                      className='items-center'
                      value={percentProgress || 0}
                    />
                    <div className='flex items-center gap-0.5'>
                      {percentProgress || 0}%
                    </div>
                    <Button
                      variant={'secondary'}
                      className='px-2 py-0'
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
                      <Pencil height={16} width={16} />
                    </Button>
                  </div>
                  <div className='flex w-max items-center text-xs font-medium text-gray-500'>
                    <div>
                      {pageProgress} / {readDate?.readingProgress?.capacity}{' '}
                      pages read
                    </div>
                  </div>
                </div>
              </div>
              {/* <RatingInfo size={'sm'} ratings={hit?.ratings || []} /> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default CurrentlyReadingItem;
