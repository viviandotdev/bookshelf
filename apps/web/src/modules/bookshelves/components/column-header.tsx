import React from 'react'

interface ColumnHeaderProps {
    title: string;

}

export const ColumnHeader: React.FC<ColumnHeaderProps> = ({ title }) => {
    return (
        <div className="pt-2 px-2 text-sm font-semibold flex justify-between items-start- gap-x-2">
            <div
                // onClick={enableEditing}
                className="w-full text-sm px-2.5 py-1 h-7 font-medium border-transparent"
            >
                {title}
            </div>
        </div>
    );
}
export default ColumnHeader
