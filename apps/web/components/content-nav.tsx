"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types";
import { buttonVariants } from "./ui/button";
import { Icons } from "./icons";
import { Input } from "./ui/input";
interface ContentNavProps {
  sorting?: NavItem[];
  nav: NavItem[];
}

export function ContentNav({ sorting, nav }: ContentNavProps) {
  return (
    <nav className="flex w-full gap-20 rounded-lg items-center justify-between mt-8">
      <div className="flex gap-2 text-sm items-center justify-between relative w-full">
        <div className="flex gap-2 text-sm items-start">
          <button
            className={cn(buttonVariants({ variant: "tag", size: "xs" }))}
          >
            23 Books
          </button>
        </div>
        <div className="flex text-sm gap-2 items-center">
          <div className="items-end">
            <kbd className="pointer-events-none absolute hidden h-6 select-none items-center gap-1 px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 sm:flex">
              <Icons.search className="ml-1 h-3 w-3 bg-secondary" />
            </kbd>
            <Input
              type="search"
              placeholder="Search bookshelves..."
              className="h-6 w-full pl-8 text-xs"
            />
          </div>

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
      </div>
    </nav>
  );
}
