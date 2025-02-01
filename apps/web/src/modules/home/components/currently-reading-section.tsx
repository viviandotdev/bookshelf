'use client';
import React from 'react';
import DashboardHeader from './dashboard-header';
import { Reading_Status, UserBook } from '@/graphql/graphql';
import CurrentlyReadingItem from './currently-reading-item';

interface CurrentlyReadingSectionProps {
  currentlyReading: UserBook[];
  count: number;
}

export const CurrentlyReadingSection: React.FC<
  CurrentlyReadingSectionProps
> = ({ currentlyReading, count }) => {
  return (
    <section className='flex flex-col gap-3 rounded-md border-gray-200 bg-white shadow-sm'>
      {currentlyReading.map((book, idx) => (
        <CurrentlyReadingItem key={idx} userBook={book} />
      ))}
    </section>
  );
};
export default CurrentlyReadingSection;
