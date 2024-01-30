"use client";
import { DialogProps } from "@radix-ui/react-dialog";
import React, { useEffect } from "react";
import {
    CommandDialog,
    CommandGroup,
    CommandInput,
    CommandItem,
    CommandList,
    CommandSeparator,
} from "./ui/command";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import { BookData } from "@/types/interfaces";
import { cn } from "@/lib/utils";
import { Icons } from "./icons";
import { buttonVariants } from "./ui/button";
import useBooksSearch from "@/modules/search/hooks/use-books-search";

export function CommandMenu({ ...props }: DialogProps) {
    const router = useRouter();
    const [search, setSearch] = React.useState("");
    const [open, setOpen] = React.useState(false);
    const { isLoading, results } = useBooksSearch(search);
    useEffect(() => {
        const down = (e: KeyboardEvent) => {
            if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
                setOpen((open) => !open);
            }
        };
        document.addEventListener("keydown", down);
        return () => document.removeEventListener("keydown", down);
    }, []);


    const onSearch = () => {
        setOpen(false);
        const encodedSearch = encodeURIComponent(search);
        router.push(`/search?q=${encodedSearch}`);
    };
    const runCommand = React.useCallback((command: () => unknown) => {
        setOpen(false);
        command();
    }, []);

    return (
        <>
            <div className={cn("relative w-full")}>
                <Input
                    type="search"
                    placeholder="Search Books..."
                    onClick={() => setOpen(true)}
                    className="h-8 w-full sm:w-64 sm:pr-12"
                    {...props}
                />
                <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-slate-500 opacity-100 sm:flex">
                    <span className="text-xs">⌘</span>K
                </kbd>
            </div>
            <CommandDialog open={open} onOpenChange={setOpen}>
                <CommandInput
                    value={search}
                    onValueChange={setSearch}
                    placeholder="Type a command or search..."
                />
                {isLoading && (
                    <div className="m-auto p-4">
                        <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                    </div>
                )}
                <CommandList>
                    <CommandSeparator />
                    {!isLoading && results && (
                        <CommandGroup heading={"Results"}>
                            {results && results.map((book: BookData) => (
                                <CommandItem
                                    key={book.id}
                                    value={`${book.title} ${book.author}`}
                                    onSelect={() => {
                                        runCommand(() => router.push(`/book/${book.id}`));
                                    }}
                                >
                                    <div className="space-x-1 px-4">
                                        <span className="font-medium text-gray-900">
                                            {book.title}
                                        </span>
                                        <span className="text-gray-400">by {book.author}</span>
                                    </div>
                                </CommandItem>
                            ))}
                        </CommandGroup>
                    )}
                    <CommandSeparator />
                </CommandList>
                {!isLoading && results && (
                    <button
                        className={cn(buttonVariants({ variant: "default" }))}
                        disabled={isLoading}
                        onClick={onSearch}
                    >
                        {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        See all results
                    </button>
                )}
            </CommandDialog>
        </>
    );
}
