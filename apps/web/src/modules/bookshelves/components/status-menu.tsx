'use client';
import React, { useState, useTransition } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { readingStatuses } from '@/config/books';
import useCreateQueryString from '../hooks/use-create-query-string';
import { Reading_Status } from '@/graphql/graphql';
import FilterMenu from './filter-menu';
import { Check } from 'lucide-react';

interface StatusMenuProps { }

const StatusMenu: React.FC<StatusMenuProps> = () => {
    const searchParams = useSearchParams();
    const status = searchParams?.get('status') ?? 'All Status';
    const statuses = [
        {
            id: 'All Status',
            name: 'All Status',
            icon: null,
        },
        ...Object.entries(readingStatuses).map(([key, value]) => ({
            id: key,
            ...value,
        })),
    ];

    const [_, setOpen] = useState(false);
    const router = useRouter();
    const createQueryString = useCreateQueryString();
    const pathname = usePathname();
    const handleSelect = (id: string) => {
        router.push(`${pathname}?${createQueryString({ status: id })}`);
        setOpen(false);
    };
    return (
        <FilterMenu
            selections={
                statuses.map((s) => (
                    <DropdownMenuItem
                        key={s.id}
                        onSelect={() => handleSelect(s.id)}
                        className='relative flex cursor-default select-none items-center rounded-sm py-1.5 pr-8 text-sm outline-hidden transition-colors focus:bg-zinc-100 focus:text-zinc-900 data-disabled:pointer-events-none data-disabled:opacity-50 dark:focus:bg-zinc-800 dark:focus:text-zinc-50'
                    >
                        <span>{s.name}</span>
                        {s.id === status && (
                            <span className='absolute right-2 flex h-3.5 w-3.5 items-center justify-center'>
                                <Check className='h-4 w-4' />
                            </span>
                        )}
                    </DropdownMenuItem>

                ))
            }
            selectedValue={
                readingStatuses[status as Reading_Status]?.name || 'All Status'
            }
        />
    );
};

export default StatusMenu;
