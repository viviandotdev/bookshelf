import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import React from 'react'
import { useAppSelector } from '@/stores';
import { selectShelves } from '@/stores/shelf-slice';
import ShelfActions from './shelf-actions';
interface ShelfMenuProps {
}

export const ShelfMenu: React.FC<ShelfMenuProps> = ({

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
                    side={"bottom"}
                    alignOffset={-132}
                >
                    {library.map((shelf, i) => (
                        <DropdownMenuItem>
                            <ShelfActions
                                key={i}
                                shelf={shelf}
                            />
                        </DropdownMenuItem>
                    ))}
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
