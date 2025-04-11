'use client';
import React from 'react';

interface ShelfTemplateProps {
    shelfName: string;
    username: string;
    count: number;
}

export const ShelfTemplate: React.FC<ShelfTemplateProps> = ({
    shelfName,
    username,
    count
}) => {

    return (
        <>
            <h1 className='text-2xl font-bold'>{shelfName}</h1>
            <p className='mr-2 mt-2 text-gray-500'>
                A collection of
                <span className='px-1 font-medium'>
                    {count} Books
                </span>
                by {username}
            </p>
        </>
    );
};

export default ShelfTemplate;
