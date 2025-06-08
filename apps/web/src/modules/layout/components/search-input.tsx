'use client';
import { Icons } from '@/components/icons';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useRef } from 'react';
import { Input } from '@/components/ui/input';

interface SearchInputProps { }

export const SearchInput: React.FC<SearchInputProps> = ({ }) => {
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
                refresh();
            } else {
                linkRef.current.click();
            }
        }
    };

    const handleClearSearch = () => {
        setSearch('');
        if (pathname === '/search') {
            const params = new URLSearchParams(searchParams);
            params.delete('q');
            replace(`${pathname}?${params.toString()}`);
            refresh();
        }
    };

    return (
        <div className={cn('relative w-full')}>
            <label htmlFor='search' className='sr-only'>
                Search
            </label>
            <div className='relative'>
                <div className='pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3'>
                    <Icons.search
                        className='h-5 w-5 cursor-pointer text-gray-400'
                        aria-hidden='true'
                    />
                </div>
                <Input
                    id='search'
                    name='search'
                    value={search}
                    onKeyDown={handleKeyPress}
                    onChange={(e) => setSearch(e.target.value)}
                    className='pl-10 pr-10 focus-visible:ring-beige-700'
                    placeholder='Search Library...'
                    type='search'
                />
                {search && (
                    <button
                        type="button"
                        onClick={handleClearSearch}
                        className="absolute inset-y-0 right-0 flex items-center pr-3 text-black "
                    >
                        <Icons.close className="h-5 w-5" aria-hidden="true" />
                    </button>
                )}
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
