'use client';
import React from 'react';
import CurrentlyReadingItem from './currently-reading-item';
import DashboardHeader from './dashboard-header';
import { Reading_Status, UserBook } from '@/graphql/graphql';

interface CurrentlyReadingSectionProps {
  currentlyReading: UserBook[];
  count: number;
}

export const CurrentlyReadingSection: React.FC<
  CurrentlyReadingSectionProps
> = ({ currentlyReading, count }) => {
  return (
    <section className='rounded-md border border-gray-200 bg-white p-6 shadow-sm'>
      <div className='mb-4 flex justify-between'>
        <DashboardHeader
          href={`/library?status=${Reading_Status.Reading}`}
          title={'Currently Reading'}
          count={count}
        />
      </div>
      <div className={'flex flex-col gap-2 '}>
        <div className='divide-y'>
          {currentlyReading.map((book, idx) => (
            <CurrentlyReadingItem key={idx} userBook={book} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default CurrentlyReadingSection;
