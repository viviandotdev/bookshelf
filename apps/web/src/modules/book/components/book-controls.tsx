'use client';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { UserBook } from '@/graphql/graphql';
import { IconButton } from '@/modules/bookshelves/components/icon-button';
import { BookData } from '@/modules/bookshelves/types';
import AddToShelfHandler from '@/modules/shelf/mutations/add-to-shelf-hadnler';
import React from 'react';
import LikeButton from './like-button';
import OwnedButton from './owned-button';
import StatusButton from './status-button';
interface BookControlsProps {
  book: BookData;
  userBook?: UserBook;
}

export const BookControls: React.FC<BookControlsProps> = ({
  book,
  userBook,
}) => {
  console.log(userBook);

  return (
    <div className='mb-10 mt-2 flex items-center justify-center gap-5 md:mb-0 md:items-start md:justify-start'>
      <StatusButton userBook={userBook} />
      {userBook && (
        <AddToShelfHandler
          userBookId={userBook.id!}
          bookTitle={book?.title || ''}
        >
          {(handleAddToShelf) => (
            <IconButton
              className='h-10 w-10'
              onClick={(e) => {
                e.stopPropagation();
                console.log('test');
                handleAddToShelf();
              }}
            >
              <span className='sr-only'>Add to Shelf</span>
              <Icons.plus className='h-4 w-4 text-black' />
            </IconButton>
          )}
        </AddToShelfHandler>
      )}

      {userBook && (
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
