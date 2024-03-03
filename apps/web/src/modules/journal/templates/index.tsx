'use client';
import { useJournalEntriesLazyQuery } from '@/graphql/graphql';
import { toast } from '@/hooks/use-toast';
import { MONTH, BOOKS_PAGE_SIZE } from '@/lib/constants';
import { NetworkStatus } from '@apollo/client';
import React, { useEffect } from 'react';
import { columns } from '../components/columns';
import { DataTable } from '@/components/ui/data-table';
import { Icons } from '@/components/icons';
import Heading from '@/components/heading';
import NoResults from '@/components/no-results';

interface JournalTemplateProps {
    bookId?: string;
    title?: string;
}

export const JournalTemplate: React.FC<JournalTemplateProps> = ({ bookId, title }) => {
    const [loadEntries, { data: journalData, fetchMore, networkStatus }] =
        useJournalEntriesLazyQuery({
            fetchPolicy: 'cache-and-network',
            nextFetchPolicy: 'cache-first',
            notifyOnNetworkStatusChange: true,
            onError: (error) => {
                toast({
                    title: error.message,
                    variant: 'destructive',
                });
            },
            onCompleted: (data) => {
                if (data && data.journalEntries && data.journalEntries.length === 0) {
                    toast({
                        title: 'No journal entries are here... yet',
                    });
                }
            },
            errorPolicy: 'all',
        });

    const journalEntires = journalData?.journalEntries.map((entry) => {
        const date = new Date(entry.dateRead);
        return {
            userBook: entry.userBook,
            monthYear: [MONTH[date.getMonth()], date.getFullYear()].join(' '),
            date: date.getDate(),
            entry: {
                id: entry.id,
                title:
                    (entry.userBook &&
                        entry.userBook.book &&
                        entry.userBook.book.title) ||
                    '',
                image:
                    entry.userBook &&
                    entry.userBook.book &&
                    entry.userBook.book.coverImage,
            },
            pagesRead: entry.pagesRead,
            progress: {
                currentPercent: entry.currentPercent,
                currentPage: entry.currentPage,
                totalPages: entry.userBook?.book?.pageCount,
            },
            notes: entry.readingNotes || '',
            liked: true,
            abandoned: entry.userBook?.status === 'Abandoned',
        };
    });
    const loading = networkStatus === NetworkStatus.loading;
    // process journal entries to table data
    // get all entries from this user

    useEffect(() => {
        const loadData = async () => {
            await loadEntries({
                variables: {
                    book: {
                        id: bookId,
                    },
                    offset: 0,
                    limit: BOOKS_PAGE_SIZE,
                },
            });
        };

        loadData();
    }, [loadEntries]);
    return (
        <>
            <section className='relative z-0 space-y-6 pb-8 pt-12'>
                <div className='bg-white'>
                    <Heading href={bookId ? `/book/${bookId}` : ''} title={title} subTitle={bookId ? "Your Journal Entries for" : ""} />
                    <div className='grid grid-cols-3 gap-4'>
                        <div className='flex flex-col justify-between gap-1 rounded-lg bg-blue-50 p-4'>
                            <div className='flex items-center justify-between'>
                                <p className='text-base text-beige-700'>
                                    Total pages read today
                                </p>
                                <div className='flex items-center align-middle text-sm font-semibold text-green-600'>
                                    <Icons.trendingUp className='mr-1 h-4 w-4 text-green-600' />
                                    +100 (2.5%)
                                </div>
                            </div>
                            <p className='text-4xl font-semibold text-beige-700'>351 pages</p>
                            <p className='text-sm text-gray-500'>Compare to 200 yesterday</p>
                        </div>
                        <div className='flex flex-col justify-between rounded-lg bg-blue-50 p-4'>
                            <div className='flex items-center justify-between'>
                                <p className='text-base text-beige-700'>
                                    Total pages read today
                                </p>
                                <div className='flex items-center align-middle text-sm font-semibold text-green-600'>
                                    <Icons.trendingUp className='mr-1 h-4 w-4 text-green-600' />
                                    +100 (2.5%)
                                </div>
                            </div>
                            <p className='text-4xl font-semibold text-beige-700'>351 pages</p>
                            <p className='text-sm text-gray-500'>Compare to 200 yesterday</p>
                        </div>
                        <div className='flex flex-col justify-between rounded-lg bg-blue-50 p-4'>
                            <div className='flex items-center justify-between'>
                                <p className='text-base text-beige-700'>
                                    Total pages read today
                                </p>
                                <div className='flex items-center align-middle text-sm font-semibold text-green-600'>
                                    <Icons.trendingUp className='mr-1 h-4 w-4 text-green-600' />
                                    +100 (2.5%)
                                </div>
                            </div>
                            <p className='text-4xl font-semibold text-beige-700'>351 pages</p>
                            <p className='text-sm text-gray-500'>Compare to 200 yesterday</p>
                        </div>
                    </div>
                </div>
                <DataTable data={journalEntires!} columns={columns} loading={loading} />
            </section>
        </>
    );
};
export default JournalTemplate;
