'use client';
import { BookRating } from '@/components/book-rating';
import { Icons } from '@/components/icons';
import Link from 'next/link';
import React, { useState } from 'react';

interface RatingInfoProps {
  ratings: {
    goodreads: number;
    google: number;
  };
  urls: {
    goodreads: string;
    google: string;
  };
  bookId?: string;
}
export const RatingInfo: React.FC<RatingInfoProps> = ({
  ratings,
  urls,
  bookId,
}) => {
  const [rating, setRating] = useState(0);
  return (
    <div className={'flex'}>
      <div className='flex gap-2.5'>
        {bookId && (
          <BookRating
            size={'md'}
            rating={rating}
            setRating={setRating}
            bookId={bookId}
          />
        )}
        {ratings.goodreads && (
          <RatingIconWrapper href={urls.goodreads} rating={ratings.goodreads}>
            <Icons.goodReads className='h-4 w-4' />
          </RatingIconWrapper>
        )}
        {ratings.google && (
          <RatingIconWrapper rating={ratings.google} href={urls.google}>
            <Icons.googleBooks className='h-4 w-4' />
          </RatingIconWrapper>
        )}
      </div>
    </div>
  );
};

const RatingIconWrapper = ({
  children,
  rating,
  href,
}: {
  children: React.ReactNode;
  rating: number;
  href: string;
}) => (
  <Link href={href} target={'_blank'} className='flex items-center'>
    <div className='inline-flex h-7 w-7 items-center justify-center rounded-full bg-gray-100'>
      {children}
    </div>
    <div className='inline-flex flex-col items-start justify-start pl-2.5'>
      <div className='flex flex-col items-start justify-start'>
        <div className='text-base font-light leading-tight text-gray-700'>
          {rating}
        </div>
      </div>
    </div>
  </Link>
);

export default RatingInfo;
