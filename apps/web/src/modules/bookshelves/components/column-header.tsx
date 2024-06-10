import React from 'react';
import { ColumnOptions } from './column-options';
import { readingStatuses } from '@/config/books';
import { cn } from '@/lib/utils';
interface ColumnHeaderProps {
  title: string;
  totalBooks: number;
}

export const ColumnHeader: React.FC<ColumnHeaderProps> = ({
  title,
  totalBooks,
}) => {
  const item = readingStatuses.find((item) => item.name === title);
  return (
    <div className='flex items-center justify-between gap-x-2 px-2 pt-2 text-sm font-semibold text-beige-700'>
      <div
        // onClick={enableEditing}
        className='align-center flex h-7 w-full border-transparent px-2.5 py-1 font-semibold'
      >
        <span className='mt-[1px]'>
          {item && item.icon && <item.icon className={cn('mr-2 h-4 w-4')} />}
        </span>

        {title}
      </div>
      <div className='h-auto w-auto items-center py-1'>{totalBooks}</div>
      <ColumnOptions
      // onAddCard={onAddCard}
      // data={data}
      />
    </div>
  );
};
export default ColumnHeader;
