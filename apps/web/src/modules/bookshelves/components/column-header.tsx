import React from 'react';
import { ColumnOptions } from './column-options';

interface ColumnHeaderProps {
  title: string;
  totalBooks: number;
}

export const ColumnHeader: React.FC<ColumnHeaderProps> = ({
  title,
  totalBooks,
}) => {
  return (
    <div className='items-start- flex justify-between gap-x-2 px-2 pt-2 text-sm font-semibold'>
      <div
        // onClick={enableEditing}
        className='h-7 w-full border-transparent px-2.5 py-1 font-medium'
      >
        {title}
      </div>
      <div className='h-auto w-auto'>{totalBooks}</div>
      <ColumnOptions
      // onAddCard={onAddCard}
      // data={data}
      />
    </div>
  );
};
export default ColumnHeader;
