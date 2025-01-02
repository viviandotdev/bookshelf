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

interface StatusMenuProps {}

const StatusMenu: React.FC<StatusMenuProps> = () => {
  const searchParams = useSearchParams();
  const status = searchParams?.get('status') ?? 'Any Status';
  const statuses = [
    {
      id: 'Any Status',
      name: 'Any Status',
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
  const [isPending, startTransition] = useTransition();

  const handleSelect = (id: string) => {
    startTransition(() => {
      router.push(`${pathname}?${createQueryString({ status: id })}`);
    });
    setOpen(false);
  };
  const getBackgroundClass = () => {
    if (readingStatuses[status as Reading_Status]?.name) {
      return 'min-w-20 border-2 border-beige-400 bg-beige-100 font-medium text-beige-700';
    } else {
      return 'min-w-20 border-2 bg-white border-dashed border-gray-400 text-gray-400 font-medium ';
    }
  };

  return (
    <FilterMenu
      selections={
        <>
          {statuses.map((s) => (
            <DropdownMenuItem
              key={s.id}
              onSelect={() => handleSelect(s.id)}
              className={cn(s.id === status && 'bg-beige-100')}
            >
              {s.icon && (
                <s.icon
                  className={cn(
                    'mr-2 h-4 w-4',
                    s.id === status ? 'opacity-100' : 'opacity-60'
                  )}
                />
              )}
              {s.name}
            </DropdownMenuItem>
          ))}
        </>
      }
      isActive={!readingStatuses[status as Reading_Status]?.name}
      selectedValue={
        readingStatuses[status as Reading_Status]?.name || 'Any Status'
      }
    />
  );
};

export default StatusMenu;
