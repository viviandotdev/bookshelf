import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import React from 'react'
import { useAppSelector } from '@/stores';
import { selectShelves } from '@/stores/shelf-slice';
import ShelfActions from './shelf-actions';
interface ShelfMenuProps {
    shelf: string
}

export const ShelfMenu: React.FC<ShelfMenuProps> = ({
    shelf
}) => {
    const shelves = useAppSelector(selectShelves)
    const library = useAppSelector((state) => state.shelf.library);
    const selections = [...library, ...shelves]

    return (
        <div className=" gap-2 text-sm flex items-center space-x-4">
            <DropdownMenu>
                <DropdownMenuTrigger className={cn(buttonVariants({ variant: "tag", size: "xs" }))}>
                    {shelf}
                    <Icons.chevronDown className="h-4 w-4 shrink-0 text-primary" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    avoidCollisions={false}
                    align={"start"}
                    side={"bottom"}
                >
                    {selections.map((s, i) => (
                        <DropdownMenuItem
                            key={i}
                            className={`${s.name === shelf
                                ? "bg-secondary"
                                : "hover:bg-opacity-70"
                                } `}>
                            <div className={` w-[fill-available] flex`}>
                                <ShelfActions
                                    key={i}
                                    shelf={s}
                                    padding={"py-0"}
                                >
                                    {s.name}
                                </ShelfActions>
                            </div>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>

    );
}
export default ShelfMenu
