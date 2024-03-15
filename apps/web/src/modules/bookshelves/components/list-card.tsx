'use client';
import BookCover from '@/components/book-cover';
import { Button } from '@/components/ui/button';
import { Book, UserBook } from '@/graphql/graphql';
import { dm_sefif_display } from '@/lib/fonts';
import { cn, formatAuthors } from '@/lib/utils';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import BookActions from '@/components/book-actions';
import { Icons } from '@/components/icons';
import { bookStatuses } from '@/config/books';
interface ListCardProps {
    book: Book;
    openAlert: boolean;
    isLoading: boolean;
    onDelete: () => void;
    status: string;
    setOpenAlert: React.Dispatch<React.SetStateAction<boolean>>;
    setStatus: React.Dispatch<React.SetStateAction<string>>;
    setRating: React.Dispatch<React.SetStateAction<number>>;
    rating: number;
    shelves: any; // Adjust the type according to your requirement
}

export const getBookStatusIcon = (statusName: string) => {
    // Find the status object in the bookStatuses array
    const status = bookStatuses.find((status) => status.name === statusName);

    // If status is found, return its icon; otherwise, return a default icon or null
    return status && <status.icon className='h-5 w-5 ' />;
};

export const ListCard: React.FC<ListCardProps> = ({
    book,
    openAlert,
    isLoading,
    onDelete,
    status,
    setRating,
    setStatus,
    setOpenAlert,
    rating,
    shelves,
}) => {
    const linkRef = useRef<HTMLAnchorElement>(null);
    const [openDropdown, setOpenDropdown] = useState(false);

    return (
        <div
            className='flex cursor-pointer items-start justify-between rounded-lg border border-gray-100 bg-white/90 p-4 shadow-sm hover:bg-beige-50'
            onClick={() => {
                if (linkRef.current) {
                    linkRef.current.click();
                }
            }}
        >
            <div className='flex items-start space-x-4'>
                <div className='flex-shrink-0'>
                    {!book.coverImage ? (
                        <div
                            className='h-[120px] w-[90px] bg-gray-200'
                            style={{
                                aspectRatio: '90/120',
                                objectFit: 'cover',
                            }}
                        />
                    ) : (
                        <BookCover src={book?.coverImage} size={'sm'} />
                    )}
                </div>
                <div className='flex flex-col gap-1.5'>
                    <h2 className={cn(dm_sefif_display.className, 'text-2xl text-beige')}>
                        {book.title}
                    </h2>
                    <div className='flex items-center gap-2'>
                        <p className='text-base text-gray-400'>by {formatAuthors(book!)}</p>
                        <div className='flex items-center'>
                            <StarIcon className='h-5 w-5 text-yellow-400' />
                            <StarIcon className='h-5 w-5 text-yellow-400' />
                            <StarIcon className='h-5 w-5 text-yellow-400' />
                            <StarIcon className='h-5 w-5 text-yellow-400' />
                            <StarIcon className='h-5 w-5 text-yellow-400' />
                        </div>
                    </div>
                    <div className='flex items-center font-medium'>
                        {/* <BookIcon className="h-6 w-6 text-gray-700" /> */}
                        <span className='text-sm text-gray-700'>{status}</span>
                        <span className='mx-2 text-sm text-gray-700'>•</span>
                        <span className='text-sm text-gray-700'>
                            Finished in April 20, 2023
                        </span>
                    </div>
                </div>
            </div>
            <div className='flex items-center space-x-2'>
                <BookActions
                    book={book!}
                    setOpenAlert={setOpenAlert}
                    openDropdown={openDropdown}
                    setOpenDropdown={setOpenDropdown}
                    status={status}
                    setStatus={setStatus}
                    setRating={setRating}
                    rating={rating}
                    shelves={shelves!}
                    side={'bottom'}
                    align='end'
                    trigger={
                        <Button variant={'secondary'} className='h-8 px-3 shadow-sm'>
                            <div className='flex items-center gap-1.5'>
                                {getBookStatusIcon(status)}
                                {status}
                                <Icons.chevronDown className='h-5 w-5 text-beige-700' />
                            </div>
                        </Button>
                    }
                />

                {/* <Button onClick={(e) => {
                    e.stopPropagation();
                    setOpenAlert(true);
                }}
                    variant="secondary" className="shadow-sm h-8 px-3"><TrashIcon className="h-5 w-5 text-gray-700" /></Button> */}
            </div>
            <Link ref={linkRef} href={`/book/${book?.id}`} className='hidden'></Link>
        </div>
    );
};
export default ListCard;

function StarIcon(props) {
    return (
        <svg
            {...props}
            xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            stroke='currentColor'
            strokeWidth='2'
            strokeLinecap='round'
            strokeLinejoin='round'
        >
            <polygon points='12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2' />
        </svg>
    );
}
