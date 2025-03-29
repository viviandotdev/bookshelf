'use client';
import { UserBook } from '@/graphql/graphql';
import React from 'react';
import LikeButton from './like-button';
import OwnedButton from './owned-button';
import StatusButton from './status-button';
import AddToShelfButton from './add-to-shelf-button';
import { BookData } from '@/modules/bookshelves/types';
interface BookActionsProps {
    targetBook?: UserBook | undefined;
    book: BookData;
}

export const BookActions: React.FC<BookActionsProps> = ({
    book,
    targetBook,
}) => {

    return (

        <>

            <div className='mb-10 mt-2 flex items-center justify-center gap-5 md:mb-0 md:items-start md:justify-start'>
                <StatusButton userBook={targetBook} book={book} />

                {targetBook && <AddToShelfButton
                    variant='icon'
                    targetBook={targetBook}
                    bookTitle={book.title}
                />}

                <>
                    <div className='h-10 w-px bg-gray-100' />
                    <div className='flex flex-col items-start justify-center'>
                        <div className='flex gap-5'>
                            {targetBook && <LikeButton targetBook={targetBook} />}
                            {targetBook && <OwnedButton targetBook={targetBook} />}
                        </div>
                    </div>
                </>
            </div>
        </>

    );
};

export default BookActions;
