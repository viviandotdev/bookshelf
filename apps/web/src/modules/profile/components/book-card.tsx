'use client';
import { Book, Size } from '@/graphql/graphql';
import { DEFAULT_BOOKCOVER_PLACEHOLDER } from '@/lib/constants';
import RatingInfo from '@/modules/book/components/actions/rating-info';
import { BookData } from '@/modules/bookshelves/types';
import Image from 'next/image';
import Link from 'next/link';

export type HitProps = {
    hit: BookData | Book;
};

const BookCard: React.FC<HitProps> = ({ hit }) => {
    const width = 68;
    const coverUrl =
        hit.covers?.find((cover) => cover.size === Size.Small)?.url ||
        hit.covers?.find((cover) => cover.size === Size.Large)?.url;


    return (
        <Link
            href={`/book/${hit!.slug}`}
        >
            <div
                className='flex w-full cursor-pointer flex-col'
            >
                <div className='border-grey-200 flex flex-row gap-4 rounded-md border bg-white p-3 sm:p-4'>
                    <div className='w-16 shrink-0 overflow-hidden rounded-md shadow-xs sm:w-20'>
                        <Image
                            className='max-h-[96px] w-full rounded object-cover sm:max-h-[114px]'
                            src={coverUrl || DEFAULT_BOOKCOVER_PLACEHOLDER}
                            width={width}
                            height={width * 1.5}
                            alt={`${hit.title} cover`}
                        />
                    </div>
                    <div className='flex flex-1 flex-col gap-1'>
                        <div className=' line-clamp-2 overflow-hidden text-sm font-medium text-stone-700 sm:text-base'>
                            {hit.title}
                        </div>
                        <div className='line-clamp-1 overflow-hidden text-xs text-gray-400'>
                            {hit.authors && hit.authors.length > 0 && hit.authors[0]} -{' '}
                            {hit.yearPublished}
                        </div>
                        <div className='mt-1 flex'>
                            <div className='flex items-center'>
                                <RatingInfo size={'sm'} ratings={hit?.ratings || []} />
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </Link>

    );
};

export default BookCard;
