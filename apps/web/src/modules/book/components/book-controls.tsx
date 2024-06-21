'use client';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/modules/bookshelves/components/icon-button';
import { BookData } from '@/modules/bookshelves/types';
import AddToShelfHandler from '@/modules/shelf/mutations/add-to-shelf-hadnler';
import React from 'react';

interface BookControlsProps {
  book: BookData;
  userBookId?: string | null;
}

export const BookControls: React.FC<BookControlsProps> = ({
  book,
  userBookId,
}) => {
  return (
    <div className='mb-10 flex items-center justify-center gap-5 md:mb-0 md:items-start md:justify-start'>
      <Button variant={'secondary'} className='gap-2 rounded-lg font-normal'>
        {/* <Icons.save className='h-5 w-5' /> */}
        <div>Want to Read</div>
      </Button>
      {userBookId && (
        <AddToShelfHandler
          userBookId={userBookId!}
          bookTitle={book?.title || ''}
        >
          {(handleAddToShelf) => (
            <IconButton
              className='h-10 w-10'
              onClick={(e) => {
                e.stopPropagation();
                handleAddToShelf();
              }}
            >
              <span className='sr-only'>Add to Collection</span>
              <Icons.plus className='h-4 w-4 text-black' />
            </IconButton>
          )}
        </AddToShelfHandler>
      )}

      <div className='h-10 w-px bg-gray-100' />
      <div className='flex flex-col items-start justify-center'>
        <div className='flex gap-5'>
          <IconButton className='h-10 w-10'>
            <span className='sr-only'>Like Book</span>
            <Icons.heart className='h-4 w-4 text-beige' />
          </IconButton>
          <IconButton className='h-10 w-10'>
            <span className='sr-only'>Add to Collection</span>
            <Icons.owned className='h-4 w-4 text-beige' />
          </IconButton>
          {/* <IconButton className='h-10 w-10'>
            <Icons.more className='h-5 w-5 text-beige' />
          </IconButton> */}
        </div>
      </div>
    </div>
  );
};

export default BookControls;
