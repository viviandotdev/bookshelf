'use client';
import { Icons } from '@/components/icons';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';
import React, { useCallback, useRef } from 'react';
import Link from 'next/link';
interface SearchInputProps {}

export const SearchInput: React.FC<SearchInputProps> = ({}) => {
  const [search, setSearch] = React.useState('');
  const linkRef = useRef<HTMLAnchorElement>(null);

  const handleKeyPress = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter' && linkRef.current) {
      linkRef.current.click();
    }
  };

  return (
    <div className={cn('relative w-full')}>
      <Input
        type='search'
        placeholder='Search Books...'
        className='h-8 w-full sm:w-64 sm:pr-12'
        onChange={(e) => setSearch(e.target.value)}
        onKeyDown={handleKeyPress}
      />
      <Link
        ref={linkRef}
        href={`/search?q=${encodeURIComponent(search)}`}
        className='absolute right-1.5 top-1.5 hidden h-5 cursor-pointer select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-gray-500 opacity-100 sm:flex'
      >
        <Icons.search className='h-3 w-3' />
      </Link>
    </div>
  );
};
export default SearchInput;
