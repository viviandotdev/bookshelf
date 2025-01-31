'use client';
import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { DropdownMenuItem } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import React, { useTransition } from 'react';
import useShelfStore from '@/stores/use-shelf-store';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import useCreateQueryString from '../hooks/use-create-query-string';
import FilterMenu from './filter-menu';
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
  const allShelves = [...shelves, ...library];
  const selectedShelf = allShelves.find((s) => s.name === selected?.name);
  const updateSelected = useShelfStore((state) => state.updateSelected);
  const createQueryString = useCreateQueryString();
  const [_, setOpen] = React.useState(false);
  const handleSelect = (val: string) => {
    updateSelected(val);
    startTransition(() => {
      router.push(
        `${pathname}?${createQueryString({
          shelf: val,
          page: 1,
          status: 'Any Status',
        })}`
      );
    });
    setOpen(false);
  };

  return (
    <div className='block lg:hidden'>
      <FilterMenu
        selections={
          <>
            {selections.map((s, i) => (
              <DropdownMenuItem
                key={i}
                onSelect={() => {
                  handleSelect(s.name);
                }}
                className={`${
                  s.name === shelf ? 'bg-beige-100' : 'hover:bg-opacity-70'
                } `}
              >
                {renderIcon(s.name, '5')}
                {s.name}
              </DropdownMenuItem>
            ))}
          </>
        }
        isActive={!selectedShelf?.name || selectedShelf?.name === 'All Books'}
        selectedValue={selectedShelf?.name || 'All Books'}
      />
    </div>
  );
};
export default ShelfMenu;
