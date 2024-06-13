'use client';
import { BookRating } from '@/components/book-rating';
import { Icons } from '@/components/icons';
import Link from 'next/link';
import React, { useState } from 'react';

interface RatingInfoProps {
  ratings: {
    goodreads?: number;
    google?: number;
  };
  urls?: {
    goodreads?: string;
    google?: string;
  };
  bookId?: string;
  size: 'sm' | 'lg';
}

const sizeClasses = {
  sm: {
    gap: 'gap-2',
    iconSize: 'h-2 w-2',
    wrapperSize: 'h-4 w-4',
    padding: 'pl-1.5',
    textSize: 'text-[11px]',
  },
  lg: {
    gap: 'gap-4',
    iconSize: 'h-4 w-4',
    wrapperSize: 'h-7 w-7',
    padding: 'pl-2.5',
    textSize: 'text-base',
  },
};

export const RatingInfo: React.FC<RatingInfoProps> = ({
  ratings,
  urls,
  bookId,
  size = 'lg',
}) => {
  const [rating, setRating] = useState(0);
  const classes = sizeClasses[size];

  return (
    <div className={`flex ${classes.gap}`}>
      {bookId && (
        <BookRating
          size={size}
          rating={rating}
          setRating={setRating}
          bookId={bookId}
        />
      )}
      {ratings.goodreads && (
        <RatingIconWrapper
          href={urls?.goodreads}
          rating={ratings.goodreads}
          size={size}
        >
          <Icons.goodReads className={classes.iconSize} />
        </RatingIconWrapper>
      )}
      {ratings.google && (
        <RatingIconWrapper
          rating={ratings.google}
          href={urls?.google}
          size={size}
        >
          <Icons.googleBooks className={classes.iconSize} />
        </RatingIconWrapper>
      )}
    </div>
  );
};

const RatingIconWrapper = ({
  children,
  rating,
  href,
  size,
}: {
  children: React.ReactNode;
  rating: number;
  href?: string;
  size: 'sm' | 'lg';
}) => {
  const classes = sizeClasses[size];

  const WrapperComponent = href ? Link : 'div';

  return (
    <WrapperComponent
      {...(href && { href, target: '_blank' })}
      className='flex items-center'
    >
      <div
        className={`inline-flex items-center justify-center rounded-full bg-gray-100 ${classes.wrapperSize}`}
      >
        {children}
      </div>
      <div
        className={`inline-flex flex-col items-start justify-start ${classes.padding}`}
      >
        <div className='flex flex-col items-start justify-start'>
          <div
            className={`${classes.textSize} font-light leading-tight text-gray-700`}
          >
            {rating}
          </div>
        </div>
      </div>
    </WrapperComponent>
  );
};

export default RatingInfo;
