'use client';
import { UserBook } from '@/graphql/graphql';
import React, { useEffect } from 'react';
import LikeButton from './like-button';
import OwnedButton from './owned-button';
import StatusButton from './status-button';
import useUserBookStore from '@/stores/use-user-book-store';
import AddToShelfButton from './add-to-shelf-button';
import AddToShelfHandler from '@/modules/shelf/mutations/add-to-shelf-hadnler';
import { IconButton } from '@/modules/bookshelves/components/icon-button';
import { Icons } from '@/components/icons';
interface BookControlsProps {
  userBook?: UserBook;
  bookTitle: string;
}

export const BookControls: React.FC<BookControlsProps> = ({
  userBook,
  bookTitle,
}) => {
  const { resetStore, initializeStore, isInLibrary } = useUserBookStore();
  useEffect(() => {
    if (userBook) {
      initializeStore({
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
      <StatusButton userBook={userBook} />
      {userBook && isInLibrary && (
        <AddToShelfButton
          variant='icon'
          userBook={userBook}
          bookTitle={bookTitle || ''}
        />
      )}

      {userBook && isInLibrary && (
        <>
          <div className='h-10 w-px bg-gray-100' />
          <div className='flex flex-col items-start justify-center'>
            <div className='flex gap-5'>
              <LikeButton userBook={userBook} />
              <OwnedButton userBook={userBook} />

              {/* TODO: Add share or more buttons? */}
              {/* <IconButton className='h-10 w-10'>
            <Icons.more className='h-5 w-5 text-beige' />
          </IconButton> */}
              {/* <IconButton className='h-10 w-10'>
            <Icons.share className='h-5 w-5 text-beige' />
          </IconButton> */}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default BookControls;
