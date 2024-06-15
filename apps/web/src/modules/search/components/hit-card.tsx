import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookData } from '@/modules/bookshelves/types';
import ArrowLink from './arrow-linkl';

interface HitCardProps {
  hit: BookData;
}

const HitCard: React.FC<HitCardProps> = ({ hit }) => {
  const width = 144;
  return (
    <div className='group/item relative rounded-xl border bg-white p-6 text-gray-700 group-hover:text-gray-900'>
      <div className='mt-4'>
        <div className='mx-auto flex flex-col items-center'>
          <Image
            alt={`${hit.title} by ${hit.authors.join(', ')}`}
            className='h-auto max-w-none object-contain shadow-md'
            width={width}
            height={width * 1.5}
            sizes='100vw'
            style={{ height: 'auto' }}
            src={hit.coverImage}
          />
        </div>
        <div className='mt-8 space-y-0.5'>
          <p className='text-lg font-semibold'>{hit.title}</p>
          <p className='text-gray-400'>{hit.authors.join(', ')}</p>
        </div>
      </div>
      <ArrowLink href={hit.urls.google} content={'View in Goodreads'} />
    </div>
  );
};

export default HitCard;
