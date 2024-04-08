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
}

export const BookCard: React.FC<ReadingCardProps> = ({ userBook }) => {
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
    <div
      className='group/item w-full'
      onMouseLeave={() => {
        setOpenDropdown(false);
      }}
    >
      <div className='relative py-3'>
        <div className='flex space-x-4'>
          <Link
            href={`/book/${book?.id}`}
            className={'text-beige hover:text-stone-500'}
          >
            <BookCover src={getCoverUrl(book!, Size.Small)} size={'xs'} />
          </Link>

          <div className='flex w-full flex-col justify-center '>
            <div className='flex flex-col'>
              <h3 className='line-clamp-2 text-lg font-bold leading-6 text-gray-900'>
                <Link href={`/book/${book?.id}`} className={'hover:underline'}>
                  {book?.title}
                </Link>
              </h3>
              <p className='text-sm text-gray-600'>by {formatAuthors(book!)}</p>
              <p className='mt-1 flex items-center gap-1.5 '></p>
              <div
                className={cn(
                  'hidden rounded-sm px-1 group-hover/item:block hover:bg-gray-200',
                  openDropdown && 'block'
                )}
              >
                <div className='absolute right-2 top-2 flex rounded-md'>
                  <BookActions
                    book={book!}
                    setOpenAlert={setOpenAlert}
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
      </div>
    </div>
  );
};
export default BookCard;
