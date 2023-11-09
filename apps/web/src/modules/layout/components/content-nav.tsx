"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

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
function SortingOptions() {
    return (
        <>
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
        </>
    );
}

interface ContentNavProps {
    showSearch?: boolean;
    showSort?: boolean;
    resultText: string;
}

export function ContentNav({
    showSearch,
    showSort,
    resultText,
}: ContentNavProps) {
    return (
        <>
            <div className="flex gap-2 text-sm items-center justify-between relative w-full">
                <div className="flex gap-2 text-sm items-start">
                    <button
                        className={cn(buttonVariants({ variant: "tag", size: "xs" }))}
                    >
                        {resultText}
                    </button>
                </div>
                <div className="flex text-sm gap-2 items-center">
                    {/* {showSearch && <SearchInput />} */}
                    {showSort && <SortingOptions />}
                </div>
            </div>

            <hr className="my-2 border-t-1 border-primary" />
            <div className="flex gap-2 text-sm items-center justify-between relative w-full">
                <div className="flex text-sm items-start relative">
                    <button
                        className={cn(buttonVariants({ variant: "tag", size: "xs" }))}
                    >
                        Read
                        <Icons.chevronDown className="h-4 w-4 shrink-0 text-primary" />
                    </button>
                    <div className="block h-full bg-slate-300 w-0.5 absolute left-16"></div>
                </div>
                <div className="flex text-sm gap-2 items-center"></div>
            </div>
        </>
    );
}
