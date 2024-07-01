'use client';
import React, { useEffect } from 'react';
import CurrentlyReadingItem from './currently-reading-item';
import DashboardHeader from './dashboard-header';
import {
  ReadDate,
  Reading_Status,
  UserBook,
  useReadDatesLazyQuery,
} from '@/graphql/graphql';
import useProgressModal from '@/components/modals/progress-modal.tsx/use-progress-modal';
import useUserBookStore from '@/stores/use-user-book-store';

interface CurrentlyReadingSectionProps {
  currentlyReading: UserBook[];
}

export const CurrentlyReadingSection: React.FC<
  CurrentlyReadingSectionProps
> = ({ currentlyReading }) => {
  const progressModal = useProgressModal();
  const [loadReadDates, { data, error, fetchMore, loading }] =
    useReadDatesLazyQuery({
      fetchPolicy: 'cache-and-network',
      onCompleted: async ({ readDates }) => {
        await progressModal.storeReadDates(readDates as ReadDate[]);
      },
    });

  useEffect(() => {
    const loadData = async () => {
      console.log(currentlyReading);
      await loadReadDates({
        variables: {
          userBookIds: currentlyReading.map((userBook) => userBook.id),
          active: true,
        },
      });
    };
    loadData();
  }, []);

  return (
    <section className='rounded-md border border-gray-200 bg-white p-6 shadow-sm'>
      <div className='mb-4 flex justify-between'>
        <DashboardHeader
          href={`/library?status=${Reading_Status.Reading}`}
          title={'Currently Reading'}
          count={currentlyReading.length}
        />
      </div>
      <div className={'flex flex-col gap-2 '}>
        <div className='divide-y'>
          {currentlyReading.map((book, idx) => (
            <CurrentlyReadingItem userBook={book} />
          ))}
        </div>
      </div>
    </section>
  );
};
export default CurrentlyReadingSection;
