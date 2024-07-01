import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Progress_Type, ReadingProgress } from '@/graphql/graphql';
import { IconButton } from '@/modules/bookshelves/components/icon-button';
import useUserBookStore from '@/stores/use-user-book-store';
import React, { useState, ChangeEvent } from 'react';

interface ProgressTabProps {
  readingProgress: ReadingProgress;
}

export const ProgressTab: React.FC<ProgressTabProps> = ({
  readingProgress,
}) => {
  const [type, setType] = useState<Progress_Type>(
    readingProgress?.type || Progress_Type.Pages
  );
  const [progress, setProgress] = useState(readingProgress.progress || 0);
  const totalPages = readingProgress.capacity || 0;
  const { bookTitle } = useUserBookStore();

  const handleToggle = (newType: Progress_Type) => {
    if (newType !== type) {
      setType(newType);
      // Convert progress when switching between types
      if (newType === Progress_Type.Percentage) {
        setProgress(Math.round((progress / totalPages) * 100));
      } else {
        setProgress(Math.round((progress / 100) * totalPages));
      }
    }
  };

  const handleIncrement = () => {
    if (type === Progress_Type.Pages) {
      setProgress(Math.min(progress + 1, totalPages));
    } else {
      setProgress(Math.min(progress + 1, 100));
    }
  };

  const handleDecrement = () => {
    setProgress(Math.max(progress - 1, 0));
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = parseInt(e.target.value, 10);
    if (!isNaN(value)) {
      if (type === Progress_Type.Pages) {
        setProgress(Math.min(Math.max(value, 0), totalPages));
      } else {
        setProgress(Math.min(Math.max(value, 0), 100));
      }
    }
  };

  const getProgressText = () => {
    if (type === Progress_Type.Pages) {
      return `of ${totalPages} pages read`;
    } else {
      return `${progress}% completed`;
    }
  };

  return (
    <div className='mt-8 flex w-full flex-col items-center justify-start gap-4'>
      <div className='flex flex-col items-center justify-start gap-4'>
        <div className='flex flex-col items-center justify-start gap-5'>
          <div className='text-lg font-normal'>
            Update reading progress for
            <span className='font-bold'> {bookTitle}</span>
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
              onChange={handleInputChange}
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
          {getProgressText()}
        </div>
      </div>
      <div className='flex w-full items-end justify-start gap-4'>
        <Button
          variant={type === Progress_Type.Pages ? 'secondary' : 'outline'}
          className='flex h-12 w-1/2 items-center justify-center rounded-lg py-4 text-sm font-normal text-black '
          onClick={() => handleToggle(Progress_Type.Pages)}
        >
          # Pages
        </Button>
        <Button
          variant={type === Progress_Type.Percentage ? 'secondary' : 'outline'}
          className='flex h-12 w-1/2 items-center justify-center rounded-lg py-4 text-sm font-normal text-black '
          onClick={() => handleToggle(Progress_Type.Percentage)}
        >
          % Percent
        </Button>
      </div>
    </div>
  );
};

export default ProgressTab;
