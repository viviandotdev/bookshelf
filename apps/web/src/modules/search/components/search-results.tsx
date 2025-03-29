'use client';

import React, { useEffect, useRef, useState } from 'react';
import { BookData } from '@/modules/bookshelves/types';
import Hit from './hit';
import { SearchX } from 'lucide-react';
import { searchBooks } from '../api/searchBooks';
import { RESULTS_PAGE_SIZE } from '@/lib/constants';
import { Icons } from '@/components/icons';

interface SearchResultsProps {
    initialHits: BookData[];
    totalItems: number;
    searchQuery: string;
    field: string;
}

const NoResults = () => {
    return (
        <div className="flex flex-col items-center justify-center py-12 text-gray-500">
            <SearchX className="h-12 w-12 mb-4" />
            <p className="text-lg">No results found</p>
            <p className="text-sm mt-2">Try adjusting your search terms</p>
        </div>
    );
};

export const SearchResults: React.FC<SearchResultsProps> = ({
    initialHits,
    totalItems,
    searchQuery,
    field,
}) => {
    const [hits, setHits] = useState<BookData[]>(initialHits);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(hits.length < totalItems);
    const observer = useRef<IntersectionObserver | null>(null);
    const lastHitRef = useRef<HTMLLIElement>(null);

    useEffect(() => {
        observer.current = new IntersectionObserver(
            (entries) => {
                const first = entries[0];
                if (first.isIntersecting && hasMore && !loading) {
                    loadMore();
                }
            },
            { threshold: 0.1 }
        );

        return () => {
            if (observer.current) {
                observer.current.disconnect();
            }
        };
    }, [hasMore, loading]);

    useEffect(() => {
        if (lastHitRef.current && observer.current) {
            observer.current.observe(lastHitRef.current);
        }
    }, [hits]);

    const loadMore = async () => {
        setLoading(true);
        const nextPage = page + 1;
        const offset = nextPage * RESULTS_PAGE_SIZE;

        try {
            const { hits: newHits } = await searchBooks(searchQuery, field, offset);
            setHits(prev => [...prev, ...newHits]);
            setPage(nextPage);
            setHasMore(hits.length + newHits.length < totalItems);
        } catch (error) {
            console.error('Error loading more results:', error);
        } finally {
            setLoading(false);
        }
    };

    if (!hits || hits.length === 0) {
        return <NoResults />;
    }

    return (
        <div className="w-full">
            <ul className="grid w-full grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3">
                {hits.map((hit, index) => (
                    <li
                        key={index}
                        ref={index === hits.length - 1 ? lastHitRef : undefined}
                    >
                        <Hit hit={hit} />
                    </li>
                ))}
            </ul>
            {loading && (
                <div className="flex justify-center items-center py-8">
                    <Icons.spinner className='h-8 w-8 animate-spin' />
                </div>
            )}
        </div>
    );
};
