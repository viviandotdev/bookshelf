'use client';
import React, { useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { Pagination } from '@/components/pagination';
import useBuildQuery from '@/modules/bookshelves/hooks/use-build-query';
import {
    useCountUserBooksQuery,
    UserBook,
} from '@/graphql/graphql';
import { BOOKS_PAGE_SIZE } from '@/lib/constants';
import { NetworkStatus } from '@apollo/client';
import useLoadBooks from '../queries/use-load-books';
import ListCard from './list-card';

interface ListViewProps { }

export const ListView: React.FC<ListViewProps> = () => {
    const searchParams = useSearchParams();
    const page = searchParams?.get('page') ?? '1';
    const query = useBuildQuery();

    // Memoize the query variables to prevent unnecessary rerenders
    const queryVariables = useMemo(() => {
        if (!query || Object.keys(query).length === 0) {
            return {};
        }
        return { ...query };
    }, [query]);

    // Use regular query for count
    const { data: countData } = useCountUserBooksQuery({
        variables: queryVariables,
        skip: !queryVariables || Object.keys(queryVariables).length === 0,
    });

    // Calculate total pages
    const totalPages = useMemo(() => {
        if (!countData?.countUserBooks) return 0;
        return Math.ceil(countData.countUserBooks / BOOKS_PAGE_SIZE);
    }, [countData?.countUserBooks]);

    // Use the optimized loadBooks hook
    const { booksData, networkStatus } = useLoadBooks({
        variables: queryVariables,
        skip: !queryVariables || Object.keys(queryVariables).length === 0,
    });

    const books = booksData?.getUserBooks?.userBooks;
    const loading = networkStatus === NetworkStatus.loading;

    // Memoize the books grid to prevent unnecessary rerenders
    const booksGrid = useMemo(() => {
        if (!books || loading) {
            return (
                <div className="flex justify-center items-center h-48">
                    <div className="animate-pulse">Loading books...</div>
                </div>
            );
        }

        if (books.length === 0) {
            return (
                <div className="flex justify-center items-center h-48">
                    <p className="text-gray-500">No books found</p>
                </div>
            );
        }

        return (
            <div className='grid 2xl:grid-cols-2 gap-4'>
                {books.map((userBook) => (
                    <ListCard
                        key={userBook.id}
                        userBook={userBook as UserBook}
                    />
                ))}
            </div>
        );
    }, [books, loading]);

    return (
        <div className="space-y-6">
            {booksGrid}
            {totalPages > 0 && <Pagination page={page} totalPages={totalPages} />}
        </div>
    );
};

export default ListView;
