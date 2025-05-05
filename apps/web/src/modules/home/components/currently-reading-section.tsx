'use client';
import React from 'react';
import { UserBook, Reading_Status } from '@/graphql/graphql';
import CurrentlyReadingItem from './currently-reading-item';
import { AddBookButton } from './add-book-button';
import { useGetUserBooksQuery } from '@/graphql/graphql';

interface CurrentlyReadingSectionProps { }

const CurrentlyReadingSection: React.FC<CurrentlyReadingSectionProps> = () => {
    const { data, loading } = useGetUserBooksQuery({
        variables: {
            where: {
                status: {
                    equals: Reading_Status.Reading,
                },
            },
        },
    });

    const currentlyReading = data?.getUserBooks.userBooks || [];

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
