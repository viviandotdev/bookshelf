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
import useShelfStore from '@/stores/use-shelf-store';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import useCreateQueryString from '../hooks/use-create-query-string';
interface ShelfMenuProps {}

export const ShelfMenu: React.FC<ShelfMenuProps> = ({}) => {
  const searchParams = useSearchParams();
  const shelf = searchParams?.get('shelf') ?? 'All Books';
  const { shelves, library } = useShelfStore();
  const selections = [...library, ...shelves];
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const [isLoading, setIsLoading] = React.useState(false);
  const router = useRouter();
  const { selected } = useShelfStore();
  // Merge shelves and library arrays
  const allShelves = [...shelves, ...library];

  const selectedShelf = allShelves.find((s) => s.name === selected?.name);

  const updateSelected = useShelfStore((state) => state.updateSelected);
  const createQueryString = useCreateQueryString();
  const [_, setOpen] = React.useState(false);
  return (
    <div className=' flex items-center gap-2 space-x-4 text-sm'>
      <DropdownMenu>
        <DropdownMenuTrigger
          className={cn(
            buttonVariants({ variant: 'pill', size: 'sm' }),
            'min-w-20'
          )}
        >
          {selectedShelf?.name}
          {/* <Icons.chevronDown className="h-4 w-4 shrink-0 text-beige" /> */}
        </DropdownMenuTrigger>
        <DropdownMenuContent
          avoidCollisions={false}
          align={'start'}
          side={'bottom'}
        >
          {selections.map((s, i) => (
            <DropdownMenuItem
              key={i}
              onSelect={() => {
                updateSelected(s.name);
                startTransition(() => {
                  router.push(
                    `${pathname}?${createQueryString({
                      shelf: s.name,
                      page: 1,
                      status: 'Any Status',
                    })}`
                  );
                });
                setOpen(false);
              }}
              className={`${
                s.name === shelf ? 'bg-beige-100' : 'hover:bg-opacity-70'
              } `}
            >
              <Icons.shelf className=' mr-2  h-5 w-5 text-gray-400' />

              <span>{s.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default ShelfMenu;
