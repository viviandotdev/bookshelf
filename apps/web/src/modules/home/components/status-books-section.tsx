// components/StatusBooksSection.tsx
import React from 'react';
import  StatusBookItem from './status-books-item';
import { UserBook } from '@/graphql/graphql';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface StatusBooksSectionProps {
  upNext: UserBook[];
  count: number;
  title: string;
  status: string;
}

const StatusBooksSection: React.FC<StatusBooksSectionProps> = ({
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
          </Link>
        </div>
      </CardHeader>
      <CardContent className='px-4'>
        <div className={cn('flex flex-col gap-4')}>
          {upNext.length > 0 &&
            upNext.map((book, idx) => (
              <div className='bg-white-100/80 rounded-lg border px-4 shadow-sm'>
                <StatusBookItem key={idx} userBook={book} />
              </div>
            ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatusBooksSection;
