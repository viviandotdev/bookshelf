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
    status: string;
    setQueryFilter: React.Dispatch<React.SetStateAction<{}>>;
}

export const StatusMenu: React.FC<StatusMenuProps> = ({
    status,
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
                <DropdownMenuTrigger className={cn(
                    buttonVariants({ variant: "tag", size: "xs" }),
                    "px-4"
                )} disabled={isPending}>

                    {status}
                    <Icons.chevronDown className="h-4 w-4 shrink-0 text-primary" />
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    avoidCollisions={false}
                    align={"start"}
                    side={"bottom"}
                >
                    {
                        statuses.map((s) => (
                            <DropdownMenuItem
                                key={s.name}
                                onSelect={() => {
                                    startTransition(() => {
                                        router.push(
                                            `${pathname}?${createQueryString({
                                                status: s.name,
                                            })}`,
                                        )
                                    })
                                    // update query url
                                    if (s.name === "Any Status") {
                                        setQueryFilter((prev: { where: UserBookWhereInput }) =>
                                        (
                                            {
                                                where: R.mergeRight(prev.where, { status: {} })

                                            }))
                                    } else {
                                        setQueryFilter((prev: { where: UserBookWhereInput }) => ({
                                            where: R.mergeRight(prev.where, {
                                                status: {
                                                    equals: s.name
                                                }
                                            })
                                        }))
                                    }

                                    setOpen(false)
                                }}
                                className={cn(s.name === status && "bg-secondary")}
                            >
                                {s.icon &&
                                    <s.icon
                                        className={cn(
                                            "mr-2 h-4 w-4",
                                            s.name === status
                                                ? "opacity-100"
                                                : "opacity-40"
                                        )}
                                    />
                                }
                                <span>{s.name}</span>
                            </DropdownMenuItem>
                        ))
                    }
                </DropdownMenuContent>
            </DropdownMenu>
        </div>

    );
}
export default StatusMenu
