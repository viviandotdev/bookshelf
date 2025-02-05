import { Icons } from '@/components/icons';
import { Shelf, UserBookShelves } from '@/graphql/graphql';
import Link from 'next/link';
import React from 'react';
import ShelfCoverGrid from './shelf-images';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Plus } from 'lucide-react';

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

      {/* <div className='flex flex-col items-center justify-center gap-2 rounded-lg border border-dashed border-gray-300 px-4 py-6'>
        <Button
          className={`cursor-pointer items-center justify-center rounded-md border border-gray-200 bg-white text-black shadow-sm transition duration-300 hover:-translate-y-0.5 hover:border-beige-700 hover:bg-beige-100`}
        >
          <span className='sr-only'>Edit Shelf</span>
          <div className='flex gap-2'>
            <div className='flex items-center justify-center'>
              <Plus className={`h-4 w-4 `} />
            </div>
            Add a shelf
          </div>
        </Button>
      </div> */}
    </div>
  );
};
export default MyShelves;
