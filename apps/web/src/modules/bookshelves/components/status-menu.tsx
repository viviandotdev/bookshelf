import { Icons } from '@/components/icons';
import { Button, buttonVariants } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { cn } from '@/lib/utils';
import { Command, LucideIcon } from 'lucide-react';
import React, { startTransition, useTransition } from 'react'
import { UserBookWhereInput } from '@/graphql/graphql';
import * as R from "ramda";
import qs from "query-string";
import { useSession } from 'next-auth/react';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { bookStatuses } from '@/config/books';
import useCreateQueryString from '../hooks/use-create-query-string';
interface StatusMenuProps {
    selectedStatus: { name: string, icon: LucideIcon };
    setSelectedStatus: React.Dispatch<React.SetStateAction<{ name: string, icon: LucideIcon }>>;
    setQueryFilter: React.Dispatch<React.SetStateAction<{}>>;
}

export const StatusMenu: React.FC<StatusMenuProps> = ({
    selectedStatus,
    setSelectedStatus,
    setQueryFilter
}) => {
    const statuses = [
        {
            name: "Any Status",
        },
        ...bookStatuses

    ]
    const [_, setOpen] = React.useState(false)
    const router = useRouter();
    const createQueryString = useCreateQueryString();
    const pathname = usePathname()
    const [isPending, startTransition] = useTransition()
    return (
        <div className=" gap-2 text-sm flex items-center space-x-4">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Button
                        disabled={isPending}
                        variant={"tag"}
                        size={"xs"}
                    >
                        {selectedStatus.name}
                        <Icons.chevronDown className="h-4 w-4 shrink-0 text-primary" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    avoidCollisions={false}
                    align={"start"}
                    side={"bottom"}
                >
                    {
                        statuses.map((status) => (
                            <DropdownMenuItem
                                key={status.name}
                                onSelect={() => {
                                    startTransition(() => {
                                        router.push(
                                            `${pathname}?${createQueryString({
                                                status: status.name,
                                            })}`,
                                        )
                                    })

                                    // update query url
                                    setSelectedStatus(status)
                                    if (status.name === "Any Status") {
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
                                {status.icon &&
                                    <status.icon
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            status.name === selectedStatus?.name
                                                ? "opacity-100"
                                                : "opacity-40"
                                        )}
                                    />
                                }
                                <span>{status.name}</span>
                            </DropdownMenuItem>
                        ))
                    }
                </DropdownMenuContent>
            </DropdownMenu>
        </div>

    );
}
export default StatusMenu
