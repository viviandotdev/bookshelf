import BookCover from '@/components/book-cover';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';
import { Bestseller, UserBook } from '@/graphql/graphql';
import { cn } from '@/lib/utils';
import Link from 'next/link';

export const MainBookList = ({ books }: { books: UserBook[] }) => (
  <div className='rounded-md border-2 border-gray-100 bg-white p-6 shadow-sm'>
    <div className='flex justify-between'>
      <h2 className={cn('mb-4 text-xl font-semibold text-beige-700')}>
        Want to Read
      </h2>
      <Button
        variant={'secondary'}
        className='flex justify-center gap-1.5 bg-white'
        size='sm'
      >
        <Icons.customize className='h-4 w-4 items-center' />
        <span className=''>Customize</span>
      </Button>
    </div>

    <div className={'grid grid-cols-5 gap-4'}>
      {books &&
        books.slice(0, 5).map((book: UserBook, idx: number) => (
          <div key={idx} className={'flex-row'}>
            {/* <Book /> */}
          </div>
        ))}
    </div>
  </div>
);
