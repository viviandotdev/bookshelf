import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/modules/bookshelves/components/icon-button';
import React from 'react';

interface BookControlsProps {}

export const BookControls: React.FC<BookControlsProps> = ({}) => {
  return (
    <div className='flex items-start gap-5'>
      <Button variant={'secondary'} className='gap-2 rounded-lg font-normal'>
        {/* <Icons.save className='h-5 w-5' /> */}
        <div>Want to Read</div>
      </Button>
      <IconButton className='h-10 w-10'>
        <span className='sr-only'>Add to Collection</span>
        <Icons.plus className='h-4 w-4 text-black' />
      </IconButton>
      <div className='h-10 w-px bg-gray-100' />
      <div className='flex flex-col items-start justify-center'>
        <div className='flex gap-5'>
          <IconButton className='h-10 w-10'>
            <span className='sr-only'>Like Book</span>
            <Icons.heart className='h-4 w-4 text-beige' />
          </IconButton>
          <IconButton className='h-10 w-10'>
            <span className='sr-only'>Add to Collection</span>
            <Icons.plus className='h-4 w-4 text-beige' />
          </IconButton>
          <IconButton className='h-10 w-10'>
            <Icons.more className='h-4 w-4 text-beige' />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default BookControls;
