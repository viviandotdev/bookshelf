import { Icons } from '@/components/icons';
import { Button, buttonVariants } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { Command, LucideIcon } from 'lucide-react';
import React from 'react'
import { Shelf, UserBookWhereInput } from '../../../../graphql/graphql';
import * as R from "ramda";
import qs from "query-string";
import { BOOK_STATUSES } from '@/lib/constants';
import { useSession } from 'next-auth/react';
import { useRouter, useSearchParams } from 'next/navigation';
import { useAppSelector } from '@/stores';
import { selectShelves } from '@/stores/shelf-slice';
import ShelfActions from './shelf-actions';
interface ShelfMenuProps {
    librarySelections: Shelf[];
    shelfSelections: Shelf[];
}

export const ShelfMenu: React.FC<ShelfMenuProps> = ({
    librarySelections,
    shelfSelections,

}) => {
    const shelves = useAppSelector(selectShelves)
    const library = useAppSelector((state) => state.shelf.library);
    const selected = useAppSelector((state) => state.shelf.selected);
    const [_, setOpen] = React.useState(false)

    return (
        <div className=" gap-2 text-sm flex items-center space-x-4">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <button
                        className={cn(buttonVariants({ variant: "tag", size: "xs" }))}
                    >
                        {selected}
                        <Icons.chevronDown className="h-4 w-4 shrink-0 text-primary" />
                    </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    avoidCollisions={false}
                    align={"end"}
                    side={"top"}
                    alignOffset={-88}
                    sideOffset={-200}
                >
                    {shelves.map((shelf, i) => (
                        <DropdownMenuItem>
                            <ShelfActions
                                key={i}
                                shelf={shelf}
                            />
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>

    );
}
export default ShelfMenu
