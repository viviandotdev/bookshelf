// components/StatusBooksCard.tsx
import React from 'react';
import BookCard from './book-card';
import { UserBook } from '@/graphql/graphql';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface StatusBooksCardProps {
  upNext: UserBook[];
  count: number;
  title: string;
  status: string;
}

const StatusBooksCard: React.FC<StatusBooksCardProps> = ({
  upNext,
  count,
  title,
  status,
}) => {
  return (
    <Card className='overflow-hidden rounded-xl border border-gray-200 bg-white shadow-sm'>
      <CardHeader className='p-4'>
        <div className='flex items-center justify-between'>
          <h2 className={cn('font-semibold text-beige-700')}>{title}</h2>
          <Link
            href={`/library?status=${status}`}
            className='flex gap-1 text-sm text-gray-400'
          >
            View all {count}
            {/* <ArrowUpRight className='h-4 w-4'></ArrowUpRight> */}
          </Link>
        </div>
      </CardHeader>
      <CardContent className='px-4'>
        {upNext.length > 0 && (
          <div className={cn('flex flex-col gap-4')}>
            {upNext.map((book, idx) => (
              <div className='rounded-lg bg-beige-100/80 px-4'>
                <BookCard key={idx} userBook={book} />
              </div>
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default StatusBooksCard;
