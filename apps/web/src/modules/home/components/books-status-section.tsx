'use client';
import React, { useEffect } from 'react';
import { cn } from '@/lib/utils';
import useShelfStore from '@/stores/use-shelf-store';
import { Shelf, UserBook } from '@/graphql/graphql';
import BookCard from './book-card';
import { dm_sefif_display } from '@/lib/fonts';

interface BookStatusSectionProps {
  booksData: UserBook[];
  status?: string;
  details?: {
    progress: number;
    date_started: string;
  };
  shelves: Shelf[];
  layout: 'row' | 'column';
}

export const BookStatusSection: React.FC<BookStatusSectionProps> = ({
  booksData,
  status,
  layout = 'row',
  shelves,
}) => {
  const { initShelves } = useShelfStore();
  useEffect(() => {
    initShelves(shelves);
  }, []);

  // Slice the booksData array to contain only the first 6 elements
  const limitedBooksData = booksData.slice(0, 6);

  return (
    <section aria-labelledby='currently-reading-status' className='w-full'>
      <h2
        className={cn(
          dm_sefif_display.className,
          'mb-4 text-2xl font-semibold text-beige-700'
        )}
      >
        {status}
      </h2>
      <div
        className={cn(
          layout == 'row'
            ? 'grid grid-cols-1 gap-4 md:grid-cols-3'
            : 'space-y-2'
        )}
      >
        {limitedBooksData.map((book, idx) => (
          <BookCard key={idx} userBook={book} status={status} />
        ))}
      </div>
    </section>
  );
};
