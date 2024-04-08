'use client';
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import useShelfStore from '@/stores/use-shelf-store';
import { Shelf, UserBook } from '@/graphql/graphql';
import BookCard from './book-card';

interface BookStatusSectionProps {
  booksData: UserBook[];
  shelves: Shelf[];
}

export const BookStatusSection: React.FC<BookStatusSectionProps> = ({
  booksData,
  shelves,
}) => {
  const { initShelves } = useShelfStore();
  useEffect(() => {
    initShelves(shelves);
  }, []);

  const limitedBooksData = booksData.slice(0, 6);

  return (
    <section aria-labelledby='currently-reading-status' className='w-full'>
      <div className={cn(' divide-y divide-gray-200')}>
        {limitedBooksData.map((book, idx) => (
          <BookCard key={idx} userBook={book} />
        ))}
      </div>
    </section>
  );
};
