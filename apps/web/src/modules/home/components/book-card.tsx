'use client';
import BookCover from '@/components/book-cover';
import { Icons } from '@/components/icons';
import { Card, CardContent } from '@/components/ui/card';
import { Size, UserBook } from '@/graphql/graphql';
import { Edit } from 'lucide-react';
import React, { useState } from 'react';
import EditBookCardMenu from './edit-book-card-menu';
import LogBookButton from '@/modules/layout/components/log-book-button';
import useLogBookModal from '@/components/modals/log-book-modal/use-log-book-modal';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn, formatAuthors, getCoverUrl } from '@/lib/utils';
import { useJournalEntryModal } from '@/components/modals/journal-entry-modal/use-journal-entry-modal';
import useUserBookStore from '@/stores/use-user-book-store';

import BookActions from '@/components/book-actions';
import Link from 'next/link';

interface ReadingCardProps {
  userBook: UserBook;
  status: string;
}

export const BookCard: React.FC<ReadingCardProps> = ({
  userBook,
  status: cardStatus,
}) => {
  const logBookModal = useLogBookModal();
  const journalEntryModal = useJournalEntryModal();
  const { updateBookId, updateStatus, setBook, initShelves } =
    useUserBookStore();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [status, setStatus] = useState(userBook.status ? userBook.status : '');
  const [rating, setRating] = useState(userBook.rating ? userBook.rating : 0); // Initial value
  const [openAlert, setOpenAlert] = useState(false); // Initial value
  if (!userBook) return null;
  const { book, shelves } = userBook;
  return (
    <Card
      className='group/item w-full'
      onMouseLeave={() => {
        setOpenDropdown(false);
      }}
    >
      <CardContent className='relative p-2.5'>
        <div className='flex space-x-4'>
          <Link
            href={`/book/${book?.id}`}
            className={'text-beige hover:text-stone-500'}
          >
            <BookCover src={getCoverUrl(book!, Size.Small)} size={'xs'} />
          </Link>

          <div className='flex w-full flex-col justify-center '>
            <div className='flex flex-col'>
              <h3 className='line-clamp-2 text-sm font-medium leading-4 text-gray-900'>
                <Link href={`/book/${book?.id}`} className={'hover:underline'}>
                  {book?.title}
                </Link>
              </h3>
              <p className='mt-1 text-xs text-gray-600'>
                {formatAuthors(book!)}
              </p>
              <p className='mt-1 flex items-center gap-1.5 '>
                {/* <Icons.read className='h-4 w-4 text-gray-400' /> */}
                <Button
                  onClick={(e) => {
                    e.stopPropagation();
                    setBook(book!);
                    updateStatus(status);
                    updateBookId(book!.id);
                    journalEntryModal.onOpen();
                  }}
                  variant='pill'
                  size='sm'
                  className=' h-5 rounded-sm p-2 text-[9px]'
                >
                  Update Progress
                </Button>

                <span className=' text-[10px] text-gray-600'>•</span>
                <span className=' items-center text-[11px] font-medium'>
                  75%
                </span>
              </p>
              <div
                className={cn(
                  'hidden rounded-sm px-1 group-hover/item:block hover:bg-gray-200',
                  openDropdown && 'block'
                )}
              >
                <div className='absolute right-2 top-2 flex rounded-md shadow-md'>
                  <BookActions
                    book={book!}
                    setOpenAlert={setOpenAlert}
                    // openAlert={openAlert}
                    openDropdown={openDropdown}
                    setOpenDropdown={setOpenDropdown}
                    status={status}
                    setStatus={setStatus}
                    setRating={setRating}
                    rating={rating}
                    shelves={shelves!}
                    trigger={
                      <Button
                        variant={'card'}
                        size={'xs'}
                        className={cn('rounded-md px-2')}
                      >
                        <a className=''>
                          <Icons.more className='h-4 w-4 rotate-90 cursor-pointer fill-current stroke-gray-500 stroke-1' />
                        </a>
                      </Button>
                    }
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
export default BookCard;
