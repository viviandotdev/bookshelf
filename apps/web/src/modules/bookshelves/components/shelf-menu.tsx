"use client"
import { Icons } from '@/components/icons';
import { buttonVariants } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import React from 'react'
import ShelfActions, { ShelfItem } from './shelf-item';
import useShelfStore from '@/stores/use-shelf-store';
import { useSearchParams } from 'next/navigation';
interface ShelfMenuProps {
}

export const ShelfMenu: React.FC<ShelfMenuProps> = ({
}) => {
    const searchParams = useSearchParams()
    const shelf = searchParams?.get("shelf") ?? "All Books"
    const { shelves, library } = useShelfStore()
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
                                <ShelfItem
                                    key={i}
                                    shelf={s}
                                    padding={"py-0"}
                                >
                                    {s.name}
                                </ShelfItem>
                            </div>
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>

    );
}
export default ShelfMenu
