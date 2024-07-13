'use client';
import { Book, Size } from '@/graphql/graphql';
import { DEFAULT_BOOKCOVER_PLACEHOLDER } from '@/lib/constants';
import RatingInfo from '@/modules/book/components/rating-info';
import { BookData } from '@/modules/bookshelves/types';
import Image from 'next/image';
import Link from 'next/link';

export type HitProps = {
  hit: BookData | Book;
};

const Hit: React.FC<HitProps> = ({ hit }) => {
  const width = 68;
  const coverUrl =
    hit.covers?.find((cover) => cover.size === Size.Small)?.url ||
    hit.covers?.find((cover) => cover.size === Size.Large)?.url;
  return (
    <Link
      href={`/book/${hit!.slug}`}
      className='flex max-w-[370px] cursor-pointer flex-col'
    >
      <div className='border-grey-200 flex cursor-pointer flex-row gap-4 rounded-md border bg-white p-4 transition duration-300 hover:-translate-y-0.5 hover:border-beige-700 hover:shadow-md'>
        <div className='w-20 flex-shrink-0 overflow-hidden rounded-md shadow-sm'>
          <Image
            className='max-h-[114px] w-full rounded object-cover'
            src={coverUrl || DEFAULT_BOOKCOVER_PLACEHOLDER}
            width={width}
            height={width * 1.5}
            alt={`${hit.title} cover`}
          />
        </div>
        <div className='flex flex-col gap-1'>
          <div className='line-clamp-2 overflow-hidden text-base font-medium text-stone-700'>
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
    </Link>
  );
};

export default Hit;
