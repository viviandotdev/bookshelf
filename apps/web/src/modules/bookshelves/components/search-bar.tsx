'use client';
import { Book, useSearchMyLibraryLazyQuery } from '@/graphql/graphql';
import React, { ChangeEvent, useState } from 'react';

export type SearchProps = {
  onSearch: (value: string) => void;
};

const SearchBar = (props: SearchProps) => {
  const { onSearch } = props;
  const [value, setValue] = useState('');
  const [books, setBooks] = useState([] as Book[]);
  const [hasSearched, setHasSearched] = useState(false);

  const searchHandler = (event: ChangeEvent<HTMLInputElement>) => {
    const { target } = event;
    setValue(target.value);

    if (target.value.trim() === '') {
      setBooks([]);
      setHasSearched(false);
    }
  };

  const [loadBooks, { data, loading }] = useSearchMyLibraryLazyQuery({
    fetchPolicy: 'cache-and-network',
    nextFetchPolicy: 'cache-only',
    notifyOnNetworkStatusChange: true,
    onError: (error) => {
      console.error(error);
    },
    onCompleted: (data) => {
      if (data && data.searchMyLibrary) {
        setBooks(data.searchMyLibrary);
        setHasSearched(true);
      }
    },
  });

  const handleKeyDown = async (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      await loadBooks({
        variables: {
          query: value,
        },
      });
      onSearch(value);
    }
  };

  return (
    <div className='relative w-full'>
      <input
        type='search'
        name='search'
        value={value}
        placeholder={'Enter search...'}
        className='h-10 w-full rounded-full border border-gray-300 bg-white px-5 pr-10 text-sm focus:outline-none'
        onChange={(event) => searchHandler(event)}
        onKeyDown={handleKeyDown}
      />
      {loading && (
        <div className='absolute z-10 mt-1 w-full rounded border border-gray-300 bg-white p-2 shadow-lg'>
          LOADING
        </div>
      )}
      {hasSearched && !loading && (
        <div className='absolute z-10 mt-1 w-full rounded border border-gray-300 bg-white shadow-lg'>
          {books.length > 0 ? (
            <ul>
              {books.map((book: Book) => (
                <li
                  key={book.id}
                  className='flex items-center p-2 hover:bg-gray-100'
                >
                  <div>
                    <p className='font-semibold text-gray-800'>{book.title}</p>
                    <p className='text-gray-600'>
                      {book.authors &&
                        book.authors.length > 0 &&
                        book.authors.join(', ')}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <p className='p-2 text-gray-600'>No books found</p>
          )}
        </div>
      )}
    </div>
  );
};

export default SearchBar;
