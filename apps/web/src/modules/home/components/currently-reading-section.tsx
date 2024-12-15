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
    <section className='bg-white '>
      <div className=' flex justify-between'>
        {/* <DashboardHeader
          href={`/library?status=${Reading_Status.Reading}`}
          title={'Currently Reading'}
          count={count}
        /> */}
      </div>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2'>
        {currentlyReading.map((book, idx) => (
          <CurrentlyReadingItem key={idx} userBook={book} />
        ))}
      </div>
    </section>
  );
};
export default CurrentlyReadingSection;
