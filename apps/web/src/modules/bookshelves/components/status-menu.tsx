'use client';
import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import React, { useTransition } from 'react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { readingStatuses } from '@/config/books';
import useCreateQueryString from '../hooks/use-create-query-string';
interface StatusMenuProps {}

export const StatusMenu: React.FC<StatusMenuProps> = ({}) => {
  const searchParams = useSearchParams();
  const status = searchParams?.get('status') ?? 'Any Status';
  const statuses = [
    {
      name: 'Any Status',
      icon: null,
    },
    // ...readingStatuses,
  ];
  const [_, setOpen] = React.useState(false);
  const router = useRouter();
  const createQueryString = useCreateQueryString();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  return (
    <div className=' flex items-center gap-2 space-x-4 text-sm'>
      <DropdownMenu>
        <DropdownMenuTrigger
          className={cn(
            buttonVariants({ variant: 'secondary', size: 'sm' }),
            'min-w-20 border-2 border-gray-200 bg-white hover:bg-white'
          )}
        >
          {status}
          <Icons.chevronDown className='ml-2 h-4 w-4 shrink-0 text-beige' />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          avoidCollisions={false}
          align={'start'}
          side={'bottom'}
        >
          {statuses.map((s) => (
            <DropdownMenuItem
              key={s.name}
              onSelect={() => {
                startTransition(() => {
                  router.push(
                    `${pathname}?${createQueryString({
                      status: s.name,
                    })}`
                  );
                });
                setOpen(false);
              }}
              className={cn(s.name === status && 'bg-beige-100')}
            >
              {s.icon && (
                <s.icon
                  className={cn(
                    'mr-2 h-4 w-4',
                    s.name === status ? 'opacity-100' : 'opacity-40'
                  )}
                />
              )}
              <span>{s.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default StatusMenu;
