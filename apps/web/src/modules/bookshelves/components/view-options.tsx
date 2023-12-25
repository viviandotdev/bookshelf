"use client"
import { Icons } from "@/components/icons";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { viewSelects } from "@/config/books";
import { cn } from "@/lib/utils";
import { useTransition } from "react";
import useCreateQueryString from "../hooks/use-create-query-string";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
interface ViewOptionsProps {

}
export const ViewOptions: React.FC<ViewOptionsProps> = ({ }) => {
    const router = useRouter()
    const [isPending, startTransition] = useTransition()
    const createQueryString = useCreateQueryString();
    const searchParams = useSearchParams()
    const view = searchParams?.get("view") ?? "createdAt.desc"
    const pathname = usePathname()
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button
                    variant={"tag"}
                    size={"xs"}
                    className={"bg-white px-0 mr-4"}
                >
                    <Icons.layoutList className="mr-1 h-4 w-4" />
                    List
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent
                avoidCollisions={false}
                align="start" side={"bottom"}
                className="w-48">
                <DropdownMenuLabel>View</DropdownMenuLabel>
                <DropdownMenuSeparator />
                {viewSelects.map((option) => (
                    <DropdownMenuItem
                        key={option.label}
                        className={cn(option.value === view && "font-bold")}
                        onClick={() => {
                            startTransition(() => {
                                router.push(
                                    `${pathname}?${createQueryString({
                                        view: option.value,
                                    })}`,
                                )
                            })
                        }}
                    >
                        <div>
                            {option.icon &&
                                <option.icon
                                    className={cn(
                                        "mr-2 h-4 w-4",
                                        option.value === view
                                            ? "opacity-100"
                                            : "opacity-40"
                                    )}
                                />
                            }
                        </div>
                        {option.label}
                    </DropdownMenuItem>
                ))}
            </DropdownMenuContent>
        </DropdownMenu>

    );
}
