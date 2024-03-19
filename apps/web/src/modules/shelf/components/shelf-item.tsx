'use client';
import React, { useCallback, useTransition } from 'react';
import { usePathname, useRouter } from 'next/navigation';
import { Shelf } from '@/graphql/graphql';
import EditShelfMenu from './edit-shelf-menu';
import useCreateQueryString from '../../bookshelves/hooks/use-create-query-string';
import useShelfStore from '@/stores/use-shelf-store';
import { Icons } from '@/components/icons';
import { renderIcon } from '@/modules/bookshelves/components/shelf-menu';

interface ShelfItemProps {
    shelf: Shelf;
    isShelves?: boolean;
    setOpenAlert?: React.Dispatch<React.SetStateAction<boolean>>;
    padding?: string;
}

export const ShelfItem: React.FC<ShelfItemProps> = ({
    shelf,
    isShelves,
    setOpenAlert,
    padding = 'py-3',
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
            className={`${selected && shelf.name === selected!.name
                ? 'bg-beige-100 text-beige-700'
                : 'text-gray-400'
                } group/item mr-4 flex rounded-lg px-3 text-base font-medium justify-between`}
        >
            <div
                className={`cursor-pointer py-[8px] `}
                onClick={handleClick}
            >
                <span className='flex items-center hover:text-beige-700   '>
                    {/* <Icons.shelf className='mr-2 h-6 w-6' /> */}
                    {renderIcon(shelf.name, "6")}
                    <span className='w-44  truncate'>
                        {shelf.name}
                    </span>

                </span>
            </div>
            {setOpenAlert && isShelves && shelf.name !== "Favorites" && shelf.name !== "Owned" ? (
                <EditShelfMenu shelf={shelf} setOpenAlert={setOpenAlert} />
            ) : (
                <span
                    className={`${isShelves ? 'block items-end group-hover/item:hidden ' : ''
                        } cursor-pointer rounded-sm
                            px-1 text-gray-400 ${padding}`}
                >
                    {/* {shelf._count.userBooks} */}
                </span>
            )}
        </div>
    );
};

export default ShelfItem;
