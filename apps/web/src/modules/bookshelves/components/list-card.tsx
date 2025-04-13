'use client';
import BookCover from '@/components/book-cover';
import { Button } from '@/components/ui/button';
import { Book, Reading_Status, Shelf, Size, UserBook } from '@/graphql/graphql';
import { cn, formatAuthors, getCoverUrl } from '@/lib/utils';
import Link from 'next/link';
import React, { useRef, useState } from 'react';
import BookActions from '@/components/book-actions';
import { Icons } from '@/components/icons';
import { readingStatuses } from '@/config/books';
import Rating from '@/components/rating';
import RatingInfo from '@/modules/book/components/actions/rating-info';
import { format } from 'date-fns';
import { IconButton } from './icon-button';

interface ListCardProps {
    userBook: UserBook;
    isLoading: boolean;
    status: string;
    setStatus: React.Dispatch<React.SetStateAction<string>>;
    setRating: React.Dispatch<React.SetStateAction<number>>;
    rating: number;
}

export const ListCard: React.FC<ListCardProps> = ({
    userBook,
    status,
    setRating,
    setStatus,
    rating,
}) => {
    const linkRef = useRef<HTMLAnchorElement>(null);
    const { book } = userBook;
    const [openDropdown, setOpenDropdown] = useState(false);
    const StatusIcon = readingStatuses[status as Reading_Status].icon;
    const [isLiked, setIsLiked] = useState(userBook.shelves?.some(({ shelf }) => shelf.name === 'Favorites'));
    const [isOwned, setIsOwned] = useState(userBook.shelves?.some(({ shelf }) => shelf.name === 'Owned'));
    const shelves = userBook.shelves?.filter(({ shelf }) => shelf.name !== 'Favorites' && shelf.name !== 'Owned');

    return (
        <div
            className='flex items-start justify-between rounded-lg border border-gray-300 bg-white/90 p-4 shadow-sm'
        >
            <div className='flex flex-1 items-start space-x-4'>
                <div className='flex-shrink-0'>
                    <BookCover src={getCoverUrl(book, Size.Small)} size={'sm'} />
                </div>
                <div className='flex w-full flex-col overflow-hidden'>
                    <div className='flex w-full items-center justify-between'>
                        <Link href={`/book/${book.slug}`}>
                            <h2 className='text-xl font-semibold leading-none text-beige hover:underline hover:underline-offset-2 cursor-pointer'>
                                {book.title}
                            </h2>
                        </Link>
                        <BookActions
                            book={book!}
                            userBookId={userBook.id}
                            openDropdown={openDropdown}
                            setOpenDropdown={setOpenDropdown}
                            status={status as Reading_Status}
                            setStatus={setStatus}
                            setRating={setRating}
                            rating={rating}
                            showRemoveBook={true}
                            side={'bottom'}
                            align='end'
                            trigger={
                                <Button variant={'secondary'} className='h-8 px-3 shadow-sm'>
                                    <div className='flex items-center gap-1.5'>
                                        <StatusIcon className={cn('h-4 w-4')} />
                                        {readingStatuses[status as Reading_Status].name}
                                        <Icons.chevronDown className='h-5 w-5 text-beige-700' />
                                    </div>
                                </Button>
                            }
                        />
                    </div>
                    <div className='flex flex-col gap-2'>
                        <p className='truncate text-sm font-normal text-beige'>
                            by {formatAuthors(book.authors!)}
                        </p>
                        <div className='flex items-center'>
                            <div className='flex items-center'>
                                {rating ? (
                                    <>
                                        <Rating className='mt-[-2.5px]' value={rating} />
                                        <span className='mx-1.5 items-center text-[10px] font-normal text-gray-400'>
                                            •
                                        </span>
                                    </>
                                ) : null}
                                {book?.ratings && book?.ratings?.length > 0 && (
                                    <>
                                        <RatingInfo size={'sm'} ratings={book?.ratings || []} />
                                        <span className='mx-1.5 items-center text-[10px] font-normal text-gray-400'>
                                            •
                                        </span>
                                    </>
                                )}

                                <span className='text-xs font-normal text-beige'>
                                    Added on {format(new Date(userBook.dateAdded), 'MMMM d, yyyy')}
                                </span>
                            </div>
                        </div>

                        <div className='-mt-0.5 flex items-center font-medium'>
                            <div className='inline-flex flex-wrap items-start justify-start'>
                                <div className='flex flex-wrap'>

                                    {
                                        isLiked &&
                                        <IconButton
                                            className={`${isLiked && isOwned ? 'mr-2' : ''} h-7 w-7 border-beige-100 bg-beige-100`}
                                        >
                                            <Icons.heart
                                                className={`h-3 w-3 items-center fill-current text-beige-700 drop-shadow-lg`}
                                            />
                                        </IconButton>

                                    }

                                    {isOwned &&
                                        <IconButton
                                            className={`h-7 w-7 border-beige-100 bg-beige-100`}
                                        >
                                            <Icons.owned
                                                className={`h-3 w-3 items-center text-beige-700 drop-shadow-lg`}
                                            />
                                        </IconButton>
                                    }
                                    {shelves && shelves.length > 0 && shelves.map(({ shelf }: { shelf: Shelf }, index: number) => (
                                        <div
                                            key={index}
                                            className={`${isOwned || isLiked ? 'ml-2' : ''} inline-flex h-9 flex-col items-start justify-start`}
                                        >
                                            <div className='flex h-7 flex-col items-center justify-center self-stretch rounded-lg bg-beige-100 px-3'>
                                                <div className='text-xs font-normal leading-loose text-beige'>
                                                    {shelf.name}
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ListCard;
