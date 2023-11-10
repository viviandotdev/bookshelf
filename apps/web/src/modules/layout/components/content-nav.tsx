"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProgressMenu from "@/modules/bookshelves/components/status-menu";
import { dm_sefif_display } from "@/lib/fonts";

// Component for the search input
function SearchInput() {
    return (
        <div className="items-end relative">
            <kbd className="pt-[9px] justify-center pointer-events-none align-middle absolute hidden h-6 select-none items-center gap-1 px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 sm:flex">
                <Icons.search className="ml-1 h-4 w-4 bg-secondary" />
            </kbd>
            <Input
                variant="rings"
                type="search"
                placeholder="Search bookshelves..."
                className="h-7 w-full px-8 py-4 text-xs "
            />
        </div>
    );
}

// Component for sorting options
export const SortingOptions = () => {
    return (
        <div className="flex text-sm gap-2 items-center">
            <button
                className={cn(
                    buttonVariants({ variant: "tag", size: "xs" }),
                    "bg-white text-primary"
                )}
            >
                <Icons.date className="mr-1 h-4 w-4" />
                Date Added
                <Icons.down className="ml-1 h-4 w-4" />
            </button>
            <button
                className={cn(
                    buttonVariants({ variant: "tag", size: "xs" }),
                    "bg-white px-0 mr-4"
                )}
            >
                <Icons.layoutList className="mr-1 h-4 w-4" />
                List
            </button>
        </div>
    );
}

interface ContentNavProps {
    children: React.ReactNode;
}

export function ContentNav({
    children

}: ContentNavProps) {
    return (
        <>
            <nav className="flex flex-col w-full rounded-lg  justify-between mt-8 pb-2">
                <h1
                    className={cn(
                        dm_sefif_display.className,
                        "text-primary text-4xl mb-8"
                    )}
                >
                    Bookshelves
                </h1>
                <div className="flex gap-2 text-sm items-center justify-between relative w-full">
                    {children}
                </div>
                <hr className="my-2 border-t-1 border-primary" />

            </nav>
        </>
    );
}
