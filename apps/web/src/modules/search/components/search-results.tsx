import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { BookData } from '@/modules/bookshelves/types';
import ArrowLink from './arrow-linkl';
import HitCard from './hit-card';
import Hit from './hit';

interface SearchResultsProps {
  hits: BookData[];
}

export const SearchResults: React.FC<SearchResultsProps> = ({ hits }) => {
  let width = 144;
  return (
    <ul className='grid w-full grid-cols-1 gap-4 md:grid-cols-1 xl:grid-cols-3'>
      {hits &&
        hits.map((hit, index) => (
          <>
            <Hit hit={hit} />
          </>
        ))}
    </ul>
  );
};
export default SearchResults;
