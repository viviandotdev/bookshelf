import React from 'react';
import { BookData } from '@/modules/bookshelves/types';
import Hit from './hit';

interface SearchResultsProps {
    hits: BookData[];
}

export const SearchResults: React.FC<SearchResultsProps> = ({ hits }) => {
    return (
        <ul className='grid w-full grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3'>
            {hits && hits.map((hit, index) => <Hit key={index} hit={hit} />)}
        </ul>
    );
};
export default SearchResults;
