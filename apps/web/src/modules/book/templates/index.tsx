import { dm_sefif_display } from '@/lib/fonts';
import { cn, formatAuthors, formatDate, getCoverUrl } from '@/lib/utils';
import { User } from '@/types/interfaces';
import React from 'react';
import Image from 'next/image';
import BookInfo from '@/modules/book/components/book-info';
import BookStatusModal from '@/components/modals/book-status-modal';
import RatingInfo from '../components/rating-info';
import BookControls from '../components/book-controls';
import UnderlinedTabs from '@/components/underlined-tabs';
import { DEFAULT_BOOKCOVER_PLACEHOLDER } from '@/lib/constants';
import { BookData } from '@/modules/bookshelves/types';
import { Button } from '@/components/ui/button';
interface BookTemplateProps {
  book: BookData;
  user: User;
}

export default function BookTemplate({ book, user }: BookTemplateProps) {
  return (
    <div className='flex justify-center'>
      <BookStatusModal />
      <div className='min-w-[1064px] '>
        <div className='mt-14 grid w-full grid-cols-1 grid-rows-[1fr_min-content] items-center gap-x-8 gap-y-8 md:grid-cols-[1fr_212px] md:items-start '>
          <section>
            <div className='flex justify-between gap-2 md:items-center'></div>
            <div className='flex flex-col justify-between gap-4'>
              <section className='flex flex-col gap-3'>
                <div>
                  <Button
                    variant='pill'
                    className='h-10 rounded-full border text-base font-normal shadow-sm  transition duration-300 hover:-translate-y-0.5 hover:border-beige-700  hover:bg-beige-100'
                  >
                    + Add to collection
                  </Button>
                </div>
                <h1
                  className={cn(
                    dm_sefif_display.className,
                    'line-clamp-2 text-center text-5xl/[4rem] md:text-start'
                  )}
                >
                  {book.title}
                </h1>

                <span className='inline text-center text-lg text-gray-400 md:text-start'>
                  by {formatAuthors(book.authors)} - {book.publishedDate}
                </span>
                <div className='flex justify-center  md:justify-start'>
                  <RatingInfo
                    bookId={book?.id}
                    ratings={book?.ratings}
                    urls={book?.urls}
                  />
                </div>
              </section>
              <BookControls />
            </div>
          </section>
          <section className='mx-auto items-center md:mx-0 md:items-start'>
            <Image
              width={160}
              height={277}
              src={book.coverImage || DEFAULT_BOOKCOVER_PLACEHOLDER}
              className='max-w-none rounded-lg md:w-[stretch]'
              alt='book cover'
            />
          </section>
        </div>
        <section className='max-w-[1064px]'>
          <main className='flex min-h-screen flex-col'>
            <UnderlinedTabs processedBook={book} />
          </main>
        </section>
      </div>
    </div>
  );
}
