'use client';
import React, { useEffect } from 'react';
import { UserBook, Reading_Status } from '@/graphql/graphql';
import CurrentlyReadingItem from './currently-reading-item';
import { AddBookButton } from './add-book-button';
import { useGetCurrentlyReadingBooksWithLatestReadsQuery } from '@/graphql/graphql';
import useProgressModal from '@/components/modals/progress-modal/use-progress-modal';

interface CurrentlyReadingSectionProps { }

const CurrentlyReadingSection: React.FC<CurrentlyReadingSectionProps> = () => {
    const { data, loading } = useGetCurrentlyReadingBooksWithLatestReadsQuery({
        fetchPolicy: 'cache-and-network',
    });
    const { updateReadingData } = useProgressModal();

    const currentlyReading = data?.getCurrentlyReadingBooksWithLatestReads || [];

    // Update store with reading data whenever data changes
    useEffect(() => {
        currentlyReading.forEach((userBook: any) => {
            const latestRead = userBook.read?.[0]; // First item since we order by desc and take 1
            const latestSession = latestRead?.readingSessions?.[0]; // First item since we order by desc and take 1

            if (latestRead && latestSession) {
                console.log(latestRead, latestSession);
                updateReadingData(userBook.id, latestRead, latestSession);
            }
        });
    }, [currentlyReading, updateReadingData]);

    if (loading) {
        return (
            <section className='bg-white'>
                <div className='flex justify-center py-4'>
                    <div className='h-8 w-8 animate-spin rounded-full border-b-2 border-beige-700'></div>
                </div>
            </section>
        );
    }

    return (
        <section className='bg-white'>
            <div className='flex flex-col justify-between gap-4'>
                {currentlyReading.map((userBook) => (
                    <CurrentlyReadingItem
                        key={userBook.id}
                        userBook={userBook as UserBook}
                    />
                ))}
                <div className='flex items-center justify-center rounded-md border border-dashed border-gray-300 p-4'>
                    <AddBookButton />
                </div>
            </div>
        </section>
    );
};

export default CurrentlyReadingSection;
