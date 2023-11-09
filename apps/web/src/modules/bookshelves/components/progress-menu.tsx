import { Icons } from '@/components/icons';
import { Button, buttonVariants } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { Command, LucideIcon } from 'lucide-react';
import React from 'react'
import { UserBookWhereInput } from '../../../../graphql/graphql';
import * as R from "ramda";

import { BOOK_STATUSES } from '@/lib/constants';
interface ProgressMenuProps {
    selectedStatus: { name: string, icon: LucideIcon };
    setSelectedStatus: React.Dispatch<React.SetStateAction<{ name: string, icon: LucideIcon }>>;
    setQueryFilter: React.Dispatch<React.SetStateAction<{}>>;
}

export const ProgressMenu: React.FC<ProgressMenuProps> = ({
    selectedStatus,
    setSelectedStatus,
    setQueryFilter
}) => {
    const statuses = [
        {
            name: "All",
            icon: Icons.bookPlus,
        },
        ...BOOK_STATUSES

    ]
    const [_, setOpen] = React.useState(false)

    return (
        <div className=" gap-2 text-sm flex items-center space-x-4">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <button
                        className={cn(buttonVariants({ variant: "tag", size: "xs" }))}
                    >
                        Progress
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
                    {
                        statuses.map((status) => (
                            <DropdownMenuItem
                                key={status.name}
                                onSelect={() => {
                                    setSelectedStatus(status)
                                    if (status.name === "All") {
                                        setQueryFilter((prev: { where: UserBookWhereInput }) =>
                                        (
                                            {
                                                where: R.mergeRight(prev.where, { status: {} })

                                            }))
                                    } else {
                                        setQueryFilter((prev: { where: UserBookWhereInput }) => ({
                                            where: R.mergeRight(prev.where, {
                                                status: {
                                                    equals: status.name
                                                }
                                            })
                                        }))
                                    }

                                    setOpen(false)
                                }}
                                className={cn(status.name === selectedStatus?.name && "bg-secondary")}
                            >
                                <status.icon
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        status.name === selectedStatus?.name
                                            ? "opacity-100"
                                            : "opacity-40"
                                    )}
                                />
                                <span>{status.name}</span>
                            </DropdownMenuItem>
                        ))
                    }
                </DropdownMenuContent>
            </DropdownMenu>
        </div>

    );
}
export default ProgressMenu
