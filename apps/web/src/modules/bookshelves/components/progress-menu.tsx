import { Icons } from '@/components/icons';
import { Button, buttonVariants } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { Command, LucideIcon } from 'lucide-react';
import React from 'react'
import { UserBookWhereInput } from '../../../../graphql/graphql';
import * as R from "ramda";
interface ProgressMenuProps {
    setQueryFilter: React.Dispatch<React.SetStateAction<{}>>;
}

type Status = {
    name: string
    icon: LucideIcon
}

const statuses = [
    {
        name: "All",

        icon: Icons.bookPlus,
    },
    {
        name: "Want to Read",
        icon: Icons.bookPlus,
    },
    {
        name: "Currently Reading",
        icon: Icons.bookOpen,
    },
    {
        name: "Read",
        icon: Icons.read,
    },
    {
        name: "Abandoned",
        icon: Icons.abondoned,
    },
];

export const ProgressMenu: React.FC<ProgressMenuProps> = ({
    setQueryFilter
}) => {
    const [open, setOpen] = React.useState(false)
    const [selectedStatus, setSelectedStatus] = React.useState<Status | null>(
        statuses[0]
    )

    return (
        <div className="flex items-center space-x-4">
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
