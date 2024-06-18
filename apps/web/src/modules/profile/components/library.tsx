import React from 'react';
import {
  BookCountsResponse,
  Reading_Status,
  UserBook,
} from '@/graphql/graphql';
import Hit from '@/modules/search/components/hit';
import Link from 'next/link';
import { Icons } from '@/components/icons';

interface LibraryProps {
  currentlyReading: UserBook[];
  wantToRead: UserBook[];
  upNext: UserBook[];
  finished: UserBook[];
  username: string;
  bookCounts: BookCountsResponse;
}

const Section: React.FC<{
  title: string;
  counts: number;
  username: string;
  books: UserBook[];
  status: Reading_Status;
}> = ({ username, title, books, counts, status }) => (
  <>
    {books.length > 0 && (
      <section className='flex flex-col gap-4'>
        <div className='flex justify-between'>
          <div className='flex items-center '>
            <span>{title}</span>
            <span className='mx-2 text-[11px] font-normal text-beige'>•</span>
            <span>{counts}</span>
          </div>
          <div className='flex gap-2'>
            <Link
              href={`/${username}/${status}`}
              className='group/item flex items-center gap-2'
            >
              <span>See more</span>
              <div className='mr-0.5 transition-transform duration-500 group-hover/item:-rotate-45'>
                <Icons.arrowRight className='text-grey-dark font-bold transition duration-300' />
              </div>
            </Link>
          </div>
        </div>

        <ul className='grid w-full grid-cols-1 gap-4 md:grid-cols-1 xl:grid-cols-3'>
          {books.slice(0, 6).map((hit, index) => (
            <Hit key={index} hit={hit.book} />
          ))}
        </ul>
      </section>
    )}
  </>
);

export const Library: React.FC<LibraryProps> = ({
  currentlyReading,
  wantToRead,
  upNext,
  bookCounts,
  username,
  finished,
}) => {
  return (
    <div className='flex flex-col gap-6'>
      <Section
        title='Currently Reading'
        username={username}
        counts={bookCounts.readingCount}
        books={currentlyReading}
        status={Reading_Status.Reading}
      />
      <Section
        title='Read'
        books={finished}
        counts={bookCounts.finishedCount}
        username={username}
        status={Reading_Status.Finished}
      />
      <Section
        title='Want to Read'
        counts={bookCounts.wantsToReadCount}
        username={username}
        books={wantToRead}
        status={Reading_Status.WantToRead}
      />
      <Section
        title='Up Next'
        counts={bookCounts.upNextCount}
        username={username}
        books={upNext}
        status={Reading_Status.UpNext}
      />
    </div>
  );
};

export default Library;
