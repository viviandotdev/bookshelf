"use client";

import React from "react";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types";
import { buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import { Input } from "./ui/input";

// Component for the search input
function SearchInput() {
  return (
    <div className="items-end relative">
      <kbd className="pt-[9px] justify-center pointer-events-none align-middle absolute hidden h-6 select-none items-center gap-1 px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 sm:flex">
        <Icons.search className="ml-1 h-4 w-4 bg-secondary" />
      </kbd>
      <Input
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
    <nav className="flex w-full gap-20 rounded-lg items-center justify-between mt-8 pb-2">
      <div className="flex gap-2 text-sm items-center justify-between relative w-full">
        <div className="flex gap-2 text-sm items-start">
          <button
            className={cn(buttonVariants({ variant: "tag", size: "xs" }))}
          >
            {resultText}
          </button>
        </div>
        <div className="flex text-sm gap-2 items-center">
          {showSearch && <SearchInput />}
          {showSort && <SortingOptions />}
        </div>
      </div>
    </nav>
  );
}
