import { Icons } from '@/components/icons';
import { Shelf, UserBookShelves } from '@/graphql/graphql';
import Link from 'next/link';
import React from 'react';
import ShelfCoverGrid from './shelf-images';
import { Card } from '@/components/ui/card';

interface MyShelvesProps {
  shelves: Shelf[];
  username: string | undefined | null;
}

export const MyShelves: React.FC<MyShelvesProps> = ({ shelves, username }) => {
  return (
    <div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
      {shelves.map((shelf, index) => (
        <Link href={`/${username}/shelf/${shelf.slug}`}>
          <Card
            key={index}
            className='flex max-h-44 flex-col justify-between rounded-lg bg-white px-4 pt-3 transition-all duration-300 hover:border hover:border-beige-700 hover:shadow-lg'
          >
            <div className='flex w-full flex-col items-start gap-2'>
              <div className='ml-1 text-base font-normal leading-tight text-black'>
                {shelf.name}
              </div>
              <div className='flex items-center justify-center rounded-full bg-stone-100 px-2.5 py-1'>
                <div className='text-xs font-normal leading-none text-stone-500'>
                  {shelf._count.userBooks} Books
                </div>
              </div>
            </div>
            <div className='flex w-full justify-center overflow-hidden'>
              <ShelfCoverGrid
                shelfBooks={shelf.userBooks as UserBookShelves[]}
              />
            </div>
          </Card>
        </Link>
      ))}

      <button className='flex flex-col items-center justify-center gap-2 rounded-lg bg-stone-100 px-4 py-6'>
        <div className='flex h-8 w-8 items-center justify-center rounded-full border border-stone-100 bg-white'>
          <div className='text-2xl font-normal leading-normal text-black'>
            <Icons.plus className='h-5 w-5 text-stone-500' />
          </div>
        </div>
        <div className='text-center text-sm font-medium leading-tight text-stone-500'>
          New Collection
        </div>
      </button>
    </div>
  );
};
export default MyShelves;
