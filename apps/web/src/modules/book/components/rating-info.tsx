'use client';
import { BookRating } from '@/components/book-rating';
import { Icons } from '@/components/icons';
import React, { useState } from 'react';

interface RatingInfoProps {
  goodReadsRating: number;
  googleBooksRating: number;
  bookId: string;
}
export const RatingInfo: React.FC<RatingInfoProps> = ({
  goodReadsRating,
  googleBooksRating,
  bookId,
}) => {
  const [rating, setRating] = useState(0);
  return (
    <div className={'flex'}>
      <div className='flex gap-2.5'>
        <BookRating rating={rating} setRating={setRating} bookId={bookId} />
        <RatingIconWrapper rating={goodReadsRating}>
          <Icons.goodReads />
        </RatingIconWrapper>
        <RatingIconWrapper rating={googleBooksRating}>
          <Icons.googleBooks />
        </RatingIconWrapper>
      </div>
    </div>
  );
};

const RatingIconWrapper = ({
  children,
  rating,
}: {
  children: React.ReactNode;
  rating: number;
}) => (
  <div className='flex items-center'>
    <div className='inline-flex h-5 w-5 items-center justify-center rounded-full bg-gray-100'>
      {children}
    </div>
    <div className='inline-flex flex-col items-start justify-start pl-1.5'>
      <div className='flex flex-col items-start justify-start'>
        <div className='text-xs font-light leading-tight text-gray-700'>
          {rating}
        </div>
      </div>
    </div>
  </div>
);

export default RatingInfo;
