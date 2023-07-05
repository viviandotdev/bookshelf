"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import { NavItem } from "@/types";
import { UserAccountNav } from "./user-account-nav";
import { User } from "next-auth";
import { buttonVariants } from "./ui/button";
import { Icons } from "./icons";

interface ContentNavProps {
  sorting?: NavItem[];
  nav: NavItem[];
}

export function ContentNav({ sorting, nav }: ContentNavProps) {
  return (
    <nav className="flex w-full gap-20 rounded-lg items-center justify-between mt-8">
      <div className="flex gap-2 text-sm items-start">
        <button className={cn(buttonVariants({ variant: "tag", size: "xs" }))}>
          You Want To Read 23 Books
        </button>
      </div>
      <div className="flex gap-2 text-sm items-center">
        {sorting?.map((item, index) => (
          <button
            key={index}
            className={cn(buttonVariants({ variant: "tag", size: "xs" }))}
          >
            {item.title}
            <Icons.chevronDown className="ml-1 h-4 w-4" />
          </button>
        ))}
      </div>
    </nav>
  );
}
