import React from 'react'
import { ColumnOptions } from './column-options';

interface ColumnHeaderProps {
    title: string;
    totalBooks: number;

}

export const ColumnHeader: React.FC<ColumnHeaderProps> = ({ title, totalBooks }) => {
    return (
        <div className="pt-2 px-2 text-sm font-semibold flex justify-between items-start- gap-x-2">
            <div
                // onClick={enableEditing}
                className="w-full px-2.5 py-1 h-7 font-medium border-transparent"
            >
                {title}
            </div>
            <div className="h-auto w-auto">{totalBooks}</div>
            <ColumnOptions
            // onAddCard={onAddCard}
            // data={data}
            />
        </div>
    );
}
export default ColumnHeader
