'use client';
import React, { useCallback, useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Shelf } from '@/graphql/graphql';
import EditShelfMenu from './edit-shelf-menu';
import useCreateQueryString from '../../bookshelves/hooks/use-create-query-string';
import useShelfStore from '@/stores/use-shelf-store';
import { Icons } from '@/components/icons';
import Link from 'next/link';
import { cn } from '@/lib/utils';
interface ShelfMenuItemProps {
  shelf: Shelf;
  isShelves?: boolean;
  setOpenAlert?: React.Dispatch<React.SetStateAction<boolean>>;
  padding?: string;
}

export const ShelfMenuItem: React.FC<ShelfMenuItemProps> = ({
  shelf,
  isShelves,
  setOpenAlert,
  padding = 'py-2',
}) => {
  const [isPending, startTransition] = useTransition();
  const pathname = usePathname();
  const router = useRouter();
  const { selected } = useShelfStore();
  const updateSelected = useShelfStore((state) => state.updateSelected);
  const createQueryString = useCreateQueryString();

  const handleClick = useCallback(() => {
    updateSelected(shelf.name!);
    startTransition(() => {
      router.push(
        `${pathname}?${createQueryString({
          shelf: shelf.name,
          page: 1,
          status: 'Any Status',
        })}`
      );
    });
  }, [shelf]);

  return (
    <div
      className={`${
        shelf.name === selected!.name && 'bg-beige-100'
      } group/item mr-4  flex rounded-lg px-3 text-sm font-medium `}
    >
      <div
        className={`w-[fill-available] cursor-pointer ${padding}`}
        onClick={handleClick}
      >
        <span className='flex items-center text-gray-400 hover:text-beige-700   '>
          <Icons.shelf className='mr-2 h-4 w-4' />
          {shelf.name}
        </span>
      </div>
      {setOpenAlert && isShelves ? (
        <EditShelfMenu shelf={shelf} setOpenAlert={setOpenAlert} />
      ) : (
        <span
          className={`${
            isShelves ? 'block items-end group-hover/item:hidden ' : ''
          } cursor-pointer rounded-sm
                            px-1 text-gray-400 ${padding}`}
        >
          {shelf._count.userBooks}
        </span>
      )}
    </div>
  );
};

export default ShelfMenuItem;
