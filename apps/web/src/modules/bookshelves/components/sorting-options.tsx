import { Icons } from "@/components/icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { sortingSelects } from "@/config/books";
import { cn } from "@/lib/utils";
import router from "next/router";
import { useTransition } from "react";
import useCreateQueryString from "../hooks/use-create-query-string";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";
import { UserBookWhereInput } from "@/graphql/graphql";
import * as R from "ramda";
interface SortingOptionsProps {
    sort: string;
    setQuery: React.Dispatch<React.SetStateAction<{}>>;
}
export const SortingOptions: React.FC<SortingOptionsProps> = ({ sort, setQuery }) => {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const createQueryString = useCreateQueryString();
    const pathname = usePathname()
    return (
        <div className="flex text-sm gap-2 items-center">
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button
                        disabled={isPending}
                        aria-label="Sort books"
                        variant={"tag"}
                        size={"xs"}
                        className={"bg-white text-primary"}
                    >
                        Sort
                        <Icons.down className="ml-1 h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent
                    avoidCollisions={false}
                    align="start" side={"bottom"}
                    className="w-48">
                    <DropdownMenuLabel>Sort by</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    {sortingSelects.map((option) => (
                        <DropdownMenuItem
                            key={option.label}
                            className={cn(option.value === sort && "font-bold")}
                            onClick={() => {
                                startTransition(() => {
                                    router.push(
                                        `${pathname}?${createQueryString({
                                            sort: option.value,
                                        })}`,
                                    )
                                })
                                setQuery((prev: { where: UserBookWhereInput }) =>
                                (
                                    {
                                        where: R.mergeRight(prev.where, { status: {} })

                                    }))
                            }}
                        >
                            {option.label}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
            <Button
                variant={"tag"}
                size={"xs"}
                className={"bg-white px-0 mr-4"}
            >
                <Icons.layoutList className="mr-1 h-4 w-4" />
                List
            </Button>
        </div>
    );
}
