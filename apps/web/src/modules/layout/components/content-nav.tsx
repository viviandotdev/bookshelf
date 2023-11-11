"use client";

import React, { startTransition } from "react";
import { cn } from "@/lib/utils";
import { Icons } from "@/components/icons";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import ProgressMenu from "@/modules/bookshelves/components/status-menu";
import { dm_sefif_display } from "@/lib/fonts";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { isPending } from "@reduxjs/toolkit";
import { ChevronDownIcon } from "lucide-react";
import router from "next/router";
import { sort } from "ramda";
import { sortingSelects } from "@/config/books";

// Component for sorting options

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
