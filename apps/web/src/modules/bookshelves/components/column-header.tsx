import React from 'react';
import { ColumnOptions } from './column-options';
import { bookStatuses } from '@/config/books';
import { cn } from '@/lib/utils';
interface ColumnHeaderProps {
    title: string;
    totalBooks: number;
}

export const ColumnHeader: React.FC<ColumnHeaderProps> = ({
    title,
    totalBooks,
}) => {
    const item = bookStatuses.find((item) => item.name === title);
    return (
        <div className='items-center text-beige-700 flex justify-between gap-x-2 px-2 pt-2 text-sm font-semibold'>
            <div
                // onClick={enableEditing}
                className='h-7 w-full flex align-center border-transparent px-2.5 py-1 font-semibold'
            >
                <span className="mt-[1px]">

                    {item && item.icon && (
                        <item.icon
                            className={cn(
                                'mr-2 h-4 w-4',

                            )}
                        />
                    )}
                </span>


                {title}
            </div>
            <div className='h-auto w-auto py-1 items-center'>{totalBooks}</div>
            <ColumnOptions
            // onAddCard={onAddCard}
            // data={data}
            />
        </div>
    );
};
export default ColumnHeader;
