// components/UpNextCard.tsx
import React from 'react';
import DashboardHeader from './dashboard-header';
import BookCard from './book-card';
import { Reading_Status, UserBook } from '@/graphql/graphql';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { cn } from '@/lib/utils';

interface UpNextCardProps {
  upNext: UserBook[];
}

const UpNextCard: React.FC<UpNextCardProps> = ({ upNext }) => {
  return (
    <Card className='border-grey-200 overflow-hidden rounded-md border bg-white  shadow-none'>
      <CardHeader className='p-6 pb-2 text-beige-700'>
        <div className='flex justify-between'>
          <DashboardHeader
            href={`/library?status=${Reading_Status.UpNext}`}
            title='Up Next'
            // count={upNext.length}
          />
        </div>
      </CardHeader>
      <CardContent>
        {upNext.length > 0 && (
          <div className={cn('divide-y divide-gray-200')}>
            {upNext.map((book, idx) => (
              <BookCard key={idx} userBook={book} />
            ))}
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UpNextCard;
