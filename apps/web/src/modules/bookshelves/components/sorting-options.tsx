"use client"
import { Icons } from "@/components/icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { sortingSelects } from "@/config/books";
import { cn } from "@/lib/utils";
import { useTransition } from "react";
import useCreateQueryString from "../hooks/use-create-query-string";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
interface SortingOptionsProps {

}
export const SortingOptions: React.FC<SortingOptionsProps> = ({ }) => {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const createQueryString = useCreateQueryString();
    const searchParams = useSearchParams()
    const sort = searchParams?.get("sort") ?? "createdAt.desc"
    const pathname = usePathname()
    return (
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
                            }}
                        >
                            {option.label}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
    );
}
