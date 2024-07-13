import React from 'react';
import Link from 'next/link';
import Hit from './hit';
import { BookData } from '@/modules/bookshelves/types';

interface SearchResultsProps {
  hits: BookData[];
}

export const SearchResults: React.FC<SearchResultsProps> = ({ hits }) => {
  return (
    <ul className='grid w-full grid-cols-1 gap-4 md:grid-cols-1 xl:grid-cols-3'>
      {hits &&
        hits.map((hit, index) => (
          <>
            <Hit key={index} hit={hit} />
          </>
        ))}
    </ul>
  );
};
export default SearchResults;
