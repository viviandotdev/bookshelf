'use client';
import { Source, UserBook } from '@/graphql/graphql';
import React, { useEffect } from 'react';
import LikeButton from './like-button';
import OwnedButton from './owned-button';
import StatusButton from './status-button';
import useUserBookStore from '@/stores/use-user-book-store';
import AddToShelfButton from './add-to-shelf-button';
import { BookData } from '@/modules/bookshelves/types';
interface BookControlsProps {
  userBook?: UserBook;
  book: BookData;
}

export const BookControls: React.FC<BookControlsProps> = ({
  book,
  userBook,
}) => {
  const { resetStore, setUserBook, isInLibrary } = useUserBookStore();

  useEffect(() => {
    if (userBook) {
      setUserBook({
        userBookId: userBook.id,
        isInLibrary: true,
      });
    }
    return () => {
      resetStore();
    };
  }, [userBook]);

  return (
    <div className='mb-10 mt-2 flex items-center justify-center gap-5 md:mb-0 md:items-start md:justify-start'>
      <StatusButton userBook={userBook} book={book} />
      {isInLibrary && (
        <AddToShelfButton
          variant='icon'
          userBook={userBook}
          bookTitle={book.title || ''}
        />
      )}

      {isInLibrary && (
        <>
          <div className='h-10 w-px bg-gray-100' />
          <div className='flex flex-col items-start justify-center'>
            <div className='flex gap-5'>
              <LikeButton userBook={userBook} />
              <OwnedButton userBook={userBook} />
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BookControls;
