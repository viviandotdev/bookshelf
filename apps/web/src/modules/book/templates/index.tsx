import { dm_sefif_display } from '@/lib/fonts';
import { cn, formatAuthors, formatDate, getCoverUrl } from '@/lib/utils';
import { User } from '@/types/interfaces';
import React from 'react';
import Image from 'next/image';
import { Shelf, Review, Book, Size } from '@/graphql/graphql';
import ActionsPanel from '@/modules/book/components/actions-panel';
import BookInfo from '@/modules/book/components/book-info';
import ReviewCard from '../components/review-card';
import BookStatusModal from '@/components/modals/book-status-modal';
import { BookRating } from '@/components/book-rating';
import RatingInfo from '../components/rating-info';
import BookControls from '../components/book-controls';
import UnderlinedTabs from '@/components/underlined-tabs';
interface BookTemplateProps {
  book: Book;
  shelves: Shelf[];
  reviews?: Review[];
  user: User;
}

export default function BookTemplate({
  book,
  shelves,
  reviews,
  user,
}: BookTemplateProps) {
  const reviewed =
    reviews &&
    reviews.filter((review) => review.userBook?.user?.id === user?.id);
  return (
    <div className='container mx-auto my-12  mb-4 lg:px-16 xl:px-32 2xl:px-48'>
      <BookStatusModal />
      <div className='mt-14 grid w-full max-w-[1024px] grid-cols-1 grid-rows-[min-content_1fr] items-center gap-x-8 gap-y-8 md:grid-cols-[232px_1fr] md:items-start '>
        <section className='mx-auto items-center md:mx-0 md:items-start'>
          <Image
            width={160}
            height={277}
            src={getCoverUrl(book, Size.Large)}
            className='max-w-none rounded-lg md:w-[stretch]'
            alt='book cover'
          />
        </section>
        <section>
          <div className='flex justify-between gap-2 md:items-center'></div>

          <div className='flex flex-col justify-between gap-4'>
            <section className='flex flex-col gap-2'>
              <h1
                className={cn(
                  dm_sefif_display.className,
                  'line-clamp-2 text-center text-4xl/[1.25] md:text-start'
                )}
              >
                {book.title}
              </h1>

              <span className='inline text-center text-base text-gray-400 md:text-start'>
                by {formatAuthors(book)}
              </span>
              <div className='flex justify-center  md:justify-start'>
                <RatingInfo
                  bookId={book.id}
                  goodReadsRating={3.4}
                  googleBooksRating={3.5}
                />
              </div>
              <BookInfo processedBook={book} />
            </section>
            <BookControls />
          </div>
        </section>
      </div>
      <section>
        {/* <div className='flex h-16 justify-between'>
          <div className='flex border-b-2 '>
            <div className='flex flex-shrink-0 items-start'></div>
            <div className='flex space-x-8 border-gray-100'>
              <div className='inline-flex items-center border-b-2 border-indigo-500 px-1 pt-1 text-sm font-medium text-gray-900'>
                Dashboard
              </div>
              <div className='inline-flex items-center border-b-2 border-gray-100 px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'>
                Team
              </div>
              <div className='inline-flex items-center border-b-2 border-gray-100 px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'>
                Projects
              </div>
              <div className='inline-flex items-center border-b-2 border-gray-100 px-1 pt-1 text-sm font-medium text-gray-500 hover:border-gray-300 hover:text-gray-700'>
                Calendar
              </div>
            </div>
          </div>
        </div> */}
        <main className='flex min-h-screen flex-col'>
          <UnderlinedTabs />
        </main>
      </section>
    </div>
  );
}
