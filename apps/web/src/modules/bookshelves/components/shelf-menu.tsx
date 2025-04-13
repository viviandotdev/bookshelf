'use client';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import React, { useTransition } from 'react';
import useShelfStore from '@/stores/use-shelf-store';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import useCreateQueryString from '../hooks/use-create-query-string';
import FilterMenu from './filter-menu';
import { Check } from 'lucide-react';

interface ShelfMenuProps { }


export const ShelfMenu: React.FC<ShelfMenuProps> = ({ }) => {
    const searchParams = useSearchParams();
    const shelf = searchParams?.get('shelf') ?? 'All Books';
    const { shelves, library } = useShelfStore();
    let selections = [...library, ...shelves];
    selections = selections.filter(
        (s) => s.name !== 'Owned' && s.name !== 'Favorites' && s.name !== 'Unshelved'
    );
    const pathname = usePathname();
    const router = useRouter();
    const { selected } = useShelfStore();
    const allShelves = [...shelves, ...library];
    const selectedShelf = allShelves.find((s) => s.name === selected?.name);
    const updateSelected = useShelfStore((state) => state.updateSelected);
    const createQueryString = useCreateQueryString();
    const handleSelect = (val: string) => {
        updateSelected(val);
        router.push(
            `${pathname}?${createQueryString({
                shelf: val,
                page: 1,
                status: 'All Status',
            })}`
        );
    };

    return (
        <div className='block lg:hidden'>
            <FilterMenu
                selections={
                    selections.map((s, i) => (
                        <DropdownMenuItem
                            key={i}
                            onSelect={() => handleSelect(s.slug || s.name)}
                            className='relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-8 text-sm outline-none transition-colors focus:bg-zinc-100 focus:text-zinc-900 data-[disabled]:pointer-events-none data-[disabled]:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50'
                        >
                            <span>{s.name}</span>
                            {s.name === shelf && (
                                <span className='absolute right-2 flex h-3.5 w-3.5 items-center justify-center'>
                                    <Check className='h-4 w-4' />
                                </span>
                            )}
                        </DropdownMenuItem>
                    ))
                }
                selectedValue={selectedShelf?.name || 'All Books'}
            />
        </div>
    );
};
export default ShelfMenu;
