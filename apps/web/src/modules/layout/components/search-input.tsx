'use client';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useRef } from 'react';
interface SearchInputProps {}

export const SearchInput: React.FC<SearchInputProps> = ({}) => {
  const [search, setSearch] = React.useState('');
  const linkRef = useRef<HTMLAnchorElement>(null);
  const pathname = usePathname();
  const { replace, refresh } = useRouter();
  const searchParams = useSearchParams();
  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && linkRef.current) {
      if (pathname === '/search') {
        const params = new URLSearchParams(searchParams);
        params.set('page', '1');
        if (search) {
          params.set('q', search);
        } else {
          params.delete('q');
        }
        replace(`${pathname}?${params.toString()}`);
        console.log('refresh');
        refresh();
      } else {
        linkRef.current.click();
      }
    }
  };

  return (
    <div className={cn('relative w-full')}>
      <label htmlFor='search' className='sr-only'>
        Search
      </label>
      <div className='relative'>
        <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
          {/* <MagnifyingGlassIcon className="h-5 w-5 text-gray-400" aria-hidden="true" /> */}
          <Icons.search
            className='h-5 w-5 cursor-pointer text-gray-400'
            aria-hidden='true'
          />
        </div>
        <input
          id='search'
          name='search'
          onKeyDown={handleKeyPress}
          onChange={(e) => setSearch(e.target.value)}
          className='block w-full rounded-md border-0 bg-white py-1.5 pl-10 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6'
          placeholder='Search Books...'
          type='search'
        />
        <Link
          ref={linkRef}
          href={`/search?q=${encodeURIComponent(search)}`}
          className='hidden'
        ></Link>
      </div>
    </div>
  );
};
export default SearchInput;
