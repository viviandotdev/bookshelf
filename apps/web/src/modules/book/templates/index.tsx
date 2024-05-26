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
    <div className='container my-12 lg:px-16 xl:px-32 2xl:px-48'>
      <BookStatusModal />
      <div className='mx-auto mb-4 mt-14 grid w-full max-w-[1024px] grid-cols-1 grid-rows-[min-content_1fr] items-center gap-x-8 gap-y-8 md:grid-cols-[232px_1fr] md:items-start '>
        <section className='mx-auto items-center md:mx-0 md:items-start'>
          <Image
            width={160}
            height={277}
            src={getCoverUrl(book, Size.Medium)}
            className='max-w-none rounded-lg md:w-[fill-available]'
            alt='book cover'
          />
          {/* <div className='mt-3 text-xs font-light'>
             <div>{book.pageCount} Pages</div>
            <div>First published {formatDate(book.publishedDate!)}</div>
          </div> */}
        </section>
        <section>
          <div className='flex justify-between gap-2 md:items-center'></div>

          <div className='flex justify-between gap-2'>
            <section className='flex flex-col gap-2'>
              <h1
                className={cn(
                  dm_sefif_display.className,
                  'line-clamp-2 text-center text-4xl/[1.25] text-beige-700 md:text-start'
                )}
              >
                {book.title}
              </h1>

              <span className='inline text-center text-base text-gray-400 md:text-start'>
                by {formatAuthors(book)}
              </span>
              <div>
                {/* show the book ratings and google ratings */}
                <RatingInfo
                  bookId={book.id}
                  goodReadsRating={3.4}
                  googleBooksRating={3.5}
                />
              </div>
              <BookInfo processedBook={book} />
            </section>
          </div>
        </section>
      </div>
    </div>
  );
}
