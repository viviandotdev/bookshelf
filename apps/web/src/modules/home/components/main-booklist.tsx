'use client';
import Book from '@/components/book';
import BookCover from '@/components/book-cover';
import { Suspense, useEffect, useState, useTransition } from 'react';
import { getUserBooks } from '@/modules/bookshelves/queries/getUserBooks';
import Link from 'next/link';
import NoResults from '@/components/no-results';
import CustomizeDropdown from './customize-dropdown';
import DashboardHeader from './dashboard-header';
import { Reading_Status } from '@/graphql/graphql';

export const MainBookList = ({
  books,
  count,
}: {
  books: any;
  count: number;
}) => {
  // fiction, nonfiction, want-to-read
  return (
    <div className='border border-gray-200 bg-white p-6'>
      <div className='mb-4 flex justify-between'>
        <DashboardHeader
          title={'Want to Read'}
          count={count}
          href={`/library?status=${Reading_Status.WantToRead}`}
        />

        {/* <CustomizeDropdown currentView={view} setView={setView} /> */}
      </div>
      <div className={'grid grid-cols-5 gap-4'}>
        {books.length > 0 &&
          books.map((book: any) => <BookItem key={book.id} book={book} />)}
      </div>
      {/* <ContentMessage isPending={isPending} view={view} content={content} /> */}
    </div>
  );
};

const BookItem = ({ book }: { book: any }) =>
  book.userId ? (
    <div className={'flex-row'}>
      <Book userBook={book} showRemoveBook={false} view='gallery' />
    </div>
  ) : (
    <div className={'flex-row'}>
      <Link
        href={`/book/${book.googleId}`}
        className={'text-beige hover:text-stone-500'}
      >
        <BookCover src={book.bookImage} />
      </Link>
    </div>
  );

// Define the props for the new component
type ContentMessageProps = {
  isPending: boolean;
  view: string;
  content: any[]; // You should replace 'any' with the actual type of your content items
};

const LoadingMessage: React.FC<ContentMessageProps> = ({
  isPending,
  view,
  content,
}) => {
  let message = 'Loading...'; // Default message

  // If content is not loading and the view is 'want-to-read', change the message.
  if (!isPending && view === 'want-to-read') {
    message = "You don't have any Want to Read books.";
  }

  if (content.length === 0) {
    return <NoResults message={message} />;
  }

  return null;
};
