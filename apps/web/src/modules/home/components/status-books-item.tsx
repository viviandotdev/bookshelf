'use client';
import BookCover from '@/components/book-cover';
import { Size, UserBook } from '@/graphql/graphql';
import React  from 'react';
import {  formatAuthors, getCoverUrl } from '@/lib/utils';

import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

interface StatusBookItemProps {
  userBook: UserBook;
}

export const StatusBookItem: React.FC<StatusBookItemProps> = ({ userBook }) => {
  if (!userBook) return null;
  const { book } = userBook;

  return (
    <Link
      href={`/book/${book?.slug}`}
      className='group/item block w-full text-beige-600 hover:text-beige'
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

export default StatusBookItem;
