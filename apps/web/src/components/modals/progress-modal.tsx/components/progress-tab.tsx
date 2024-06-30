import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { IconButton } from '@/modules/bookshelves/components/icon-button';
import React, { useState } from 'react';

interface ProgressTabProps {}

export const ProgressTab: React.FC<ProgressTabProps> = ({}) => {
  const [isPages, setIsPages] = useState(true);
  const [progress, setProgress] = useState(40);
  const totalPages = 460;

  const handleToggle = (pages: boolean) => {
    if (pages !== isPages) {
      setIsPages(pages);
    }
  };

  const handleIncrement = () => {
    if (isPages) {
      setProgress(Math.min(progress + 1, totalPages));
    } else {
      setProgress(Math.min(progress + 1, 100));
    }
  };

  const handleDecrement = () => {
    if (isPages) {
      setProgress(Math.max(progress - 1, 0));
    } else {
      setProgress(Math.max(progress - 1, 0));
    }
  };

  return (
    <div className='mt-8 flex w-full flex-col items-center justify-start gap-4'>
      <div className='flex flex-col items-center justify-start gap-4'>
        <div className='flex flex-col items-center justify-start gap-5'>
          <div className='text-lg font-normal'>
            Update reading progress for
            <span className='font-bold'> Atomic Habits</span>
          </div>
          <div className='flex w-full items-center justify-center gap-4'>
            <IconButton
              className={`h-14 w-14 rounded-lg`}
              onClick={handleDecrement}
            >
              <span className='sr-only'>Decrement</span>
              <Icons.minus className={`h-4 w-4 items-center`} />
            </IconButton>
            <input
              type='text'
              className='h-14 w-64 rounded-lg border border-gray-200 px-5 py-4 text-center text-lg text-neutral-900 shadow-sm'
              value={progress}
              readOnly
            />
            <IconButton
              className={`h-14 w-14 rounded-lg`}
              onClick={handleIncrement}
            >
              <span className='sr-only'>Increment</span>
              <Icons.plus className={`h-4 w-4 items-center`} />
            </IconButton>
          </div>
        </div>
        <div className='text-base font-normal text-zinc-700'>
          {isPages
            ? `of ${totalPages} pages read`
            : `${Math.round((progress / totalPages) * 100)}% completed`}
        </div>
      </div>
      <div className='flex w-full items-end justify-start gap-4'>
        <Button
          variant={isPages ? 'secondary' : 'outline'}
          className='flex h-12 w-1/2 items-center justify-center rounded-lg py-4 text-sm font-normal text-black '
          onClick={() => handleToggle(true)}
        >
          # Pages
        </Button>
        <Button
          variant={isPages ? 'outline' : 'secondary'}
          className='flex h-12 w-1/2 items-center justify-center rounded-lg py-4 text-sm font-normal text-black '
          onClick={() => handleToggle(false)}
        >
          % Percent
        </Button>
      </div>
    </div>
  );
};
export default ProgressTab;
