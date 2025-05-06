'use client';
import { Icons } from '@/components/icons';
import { Book, Size, useSearchMyLibraryLazyQuery } from '@/graphql/graphql';
import { getCoverUrl } from '@/lib/utils';
import React, { ChangeEvent, useState } from 'react';
import BookCover from '@/components/book-cover';
import Link from 'next/link';
const SearchBar = () => {
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
                setBooks(data.searchMyLibrary as Book[]);
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
        }
    };

    const handleClearSearch = () => {
        setValue('');
        setBooks([]);
        setHasSearched(false);
    };

    return (
        <div className='relative w-full'>
            <div className='relative'>
                <div className='absolute inset-y-0 left-0 flex cursor-pointer items-center pl-3'>
                    {value ? (
                        <Icons.close
                            className='h-5 w-5 cursor-pointer  text-gray-400'
                            aria-hidden='true'
                            onClick={handleClearSearch}
                        />
                    ) : (
                        <Icons.search
                            className='h-5 w-5 text-gray-400'
                            aria-hidden='true'
                        />
                    )}
                </div>
                <input
                    type='text'
                    name='search'
                    value={value}
                    placeholder={'Enter search...'}
                    className='h-8 w-full rounded-xl border border-gray-300 bg-white pl-10 pr-4 text-sm focus:outline-hidden'
                    onChange={(event) => searchHandler(event)}
                    onKeyDown={handleKeyDown}
                    autoComplete='off'
                    autoCorrect='off'
                    spellCheck='false'
                    autoCapitalize='off'
                />
            </div>
            {loading && (
                <div className='absolute z-10 mt-1 w-full rounded border border-gray-300 bg-white p-2 shadow-lg'>
                    LOADING
                </div>
            )}
            {hasSearched && !loading && (
                <div className='absolute z-10 mt-1 pt-1 w-full rounded border border-gray-300 bg-white shadow-lg max-h-72 overflow-y-auto'>
                    {books.length > 0 ? (
                        <ul>
                            {books.map((book: Book) => (
                                <Link
                                    href={'/book/' + book.slug}
                                    key={book.id}
                                    className='flex items-start gap-2 px-4 py-2 hover:bg-gray-100'
                                >
                                    <BookCover size={'xs'} src={getCoverUrl(book, Size.Small)} />
                                    <div >
                                        <p className='line-clamp-2 overflow-hidden font-semibold text-gray-800'>
                                            {book.title}
                                        </p>
                                        <p className='text-gray-600'>
                                            {book.authors &&
                                                book.authors.length > 0 &&
                                                book.authors.join(', ')}
                                        </p>
                                    </div>
                                </Link>
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
