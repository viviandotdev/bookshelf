'use client';
import BookCover from '@/components/book-cover';
import { Icons } from '@/components/icons';
import { Card, CardContent } from '@/components/ui/card';
import { Reading_Status, Size, UserBook } from '@/graphql/graphql';
import React, { useState } from 'react';
import useLogBookModal from '@/components/modals/log-book-modal/use-log-book-modal';
import { Button, buttonVariants } from '@/components/ui/button';
import { cn, formatAuthors, getCoverUrl } from '@/lib/utils';

import BookActions from '@/components/book-actions';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface ReadingCardProps {
  userBook: UserBook;
}

export const BookCard: React.FC<ReadingCardProps> = ({ userBook }) => {
  const logBookModal = useLogBookModal();
  const [openDropdown, setOpenDropdown] = useState(false);
  const [status, setStatus] = useState(userBook.status ? userBook.status : '');
  const [rating, setRating] = useState(userBook.rating ? userBook.rating : 0);
  const [openAlert, setOpenAlert] = useState(false);

  if (!userBook) return null;
  const { book, shelves } = userBook;

  return (
    <Link
      href={`/book/${book?.slug}`}
      className='group/item block w-full text-beige-600 hover:text-beige'
      onMouseLeave={() => {
        setOpenDropdown(false);
      }}
    >
      <div className='relative py-3'>
        <div className='flex items-center'>
          <BookCover src={getCoverUrl(book!, Size.Small)} size={'xs'} />

          <div className='ml-4 flex w-full flex-col justify-center'>
            <div className='flex flex-col'>
              <h3 className='line-clamp-2 font-bold leading-6 text-beige-700'>
                {book?.title}
              </h3>
              <p className='text-sm text-beige-700'>
                by {formatAuthors(book.authors!)}
              </p>
            </div>
          </div>
          <div className='ml-auto rounded-full p-2 group-hover/item:border group-hover/item:border-gray-200 group-hover/item:bg-white group-hover/item:shadow-md'>
            <ArrowUpRight className='h-6 w-6 transition-transform duration-300 group-hover/item:rotate-45' />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BookCard;
