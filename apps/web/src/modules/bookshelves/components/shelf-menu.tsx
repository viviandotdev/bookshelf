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

export const renderIcon = (s: string, size: string) => {
  const iconSizeClass = `mr-2 h-${size} w-${size} text-gray-400`;

  if (s === 'Favorites') {
    return <Icons.heart className={iconSizeClass} />;
  } else if (s === 'Owned') {
    return <Icons.owned className={iconSizeClass} />;
  } else {
    return <Icons.shelf className={iconSizeClass} />;
  }
};

export const ShelfMenu: React.FC<ShelfMenuProps> = ({}) => {
  const searchParams = useSearchParams();
  const shelf = searchParams?.get('shelf') ?? 'All Books';
  const { shelves, library } = useShelfStore();
  let selections = [...library, ...shelves];
  selections = selections.filter(
    (s) => s.name !== 'Owned' && s.name !== 'Favorites'
  );
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
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
            buttonVariants({ variant: 'secondary', size: 'sm' }),
            'min-w-20 border-2 border-gray-200 bg-white hover:bg-white'
          )}
        >
          {selectedShelf?.name}
          <Icons.chevronDown className='ml-2 h-4 w-4 shrink-0 text-beige' />
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
              {renderIcon(s.name, '5')}
              <span>{s.name}</span>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
export default ShelfMenu;
