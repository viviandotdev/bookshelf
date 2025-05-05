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

const statusColorMap: Record<string, string> = {
    'Reading': 'bg-orange-100 text-orange-700 border-orange-200',
    'Finished': 'bg-green-100 text-green-700 border-green-200',
    'Want to Read': 'bg-red-100 text-red-700 border-red-200',
    'Up Next': 'bg-yellow-100 text-yellow-700 border-yellow-200',
    'Did Not Finish': 'bg-gray-100 text-gray-700 border-gray-200',
};

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
            className='flex items-start justify-between rounded-lg border border-gray-200 bg-white/90 p-4 shadow-sm'
        >
            <div className='flex flex-1 items-start space-x-4'>
                <div className='flex-shrink-0'>
                    <BookCover src={getCoverUrl(book, Size.Small)} size={'sm'} />
                </div>
                <div className='flex w-full flex-col overflow-hidden'>
                    <div className='flex w-full items-start gap-2 justify-between'>
                        <Link href={`/book/${book.slug}`} className="flex-1 min-w-0">
                            <div className='line-clamp-2 overflow-hidden text-sm font-medium text-stone-700 sm:text-base hover:underline hover:underline-offset-2 cursor-pointer'>
                                {book.title}
                            </div>
                            <div className='line-clamp-1 overflow-hidden text-xs text-gray-400'>
                                {book.authors && formatAuthors(book.authors!)}
                            </div>
                        </Link>
                        <div className={`inline-flex items-start rounded-full px-2 py-1 border text-xs font-medium
                            ${statusColorMap[readingStatuses[status as Reading_Status]?.name] || 'bg-beige-100 text-beige-700 border-beige-200'}`}>
                            {readingStatuses[status as Reading_Status].name}
                        </div>
                        <BookActions
                            userBookId={userBook.id}
                            book={book!}
                            showRemoveBook={true}
                            openDropdown={openDropdown}
                            setOpenDropdown={setOpenDropdown}
                            status={status as Reading_Status}
                            setStatus={setStatus}
                            setRating={setRating}
                            rating={rating}
                            side={'bottom'}
                            trigger={
                                <Button
                                    variant={'card'}
                                    size={'xs'}
                                    className={cn('rounded-md px-2')}
                                >
                                    <a className=''>
                                        <Icons.more className='h-4 w-4 rotate-90 cursor-pointer fill-current stroke-gray-500 stroke-1' />
                                    </a>
                                </Button>
                            }
                        />
                    </div>

                    <div className='flex flex-col mt-2 gap-2'>
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
                                    <div className='flex items-center gap-2'>
                                        {shelves && shelves.length > 0 && shelves.map(({ shelf }: { shelf: Shelf }, index: number) => (
                                            <div
                                                key={index}
                                                className={`${isOwned || isLiked ? 'ml-2' : ''} inline-flex h-9 flex-col items-start justify-start`}
                                            >
                                                <div className='flex h-7 flex-col items-center justify-center self-stretch rounded-full bg-beige-100 px-3'>
                                                    <div className='text-xs font-medium leading-loose text-beige'>
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
        </div>
    );
};

export default ListCard;
