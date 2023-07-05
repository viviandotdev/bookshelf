"use client";

import { DialogProps } from "@radix-ui/react-dialog";
import React from "react";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
} from "./ui/command";
import { Input } from "./ui/input";
import { useRouter } from "next/navigation";
import axios from "axios";
import { toast } from "./ui/use-toast";
import { BookData } from "@/types/interfaces";
import { cn, processBookData } from "@/lib/utils";
import { Icons } from "./icons";

export function CommandMenu({ ...props }: DialogProps) {
  const router = useRouter();
  const [search, setSearch] = React.useState("");
  const [open, setOpen] = React.useState(false);
  const [results, setResults] = React.useState<BookData[] | null>(null);
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        setOpen((open) => !open);
      }
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  React.useEffect(() => {
    setIsLoading(true);
    if (search !== "") {
      const url = `https://www.googleapis.com/books/v1/volumes?q=intitle:${search}&maxResults=20&keyes&key=${process.env.GOOGLE_BOOKS_API_KEY}`;
      axios
        .get(url)
        .then((response) => {
          let data = response.data.items;
          let books = processBookData(data);
          setIsLoading(false);
          setResults(books);
        })
        .catch((error) => {
          setIsLoading(false);
          toast({
            title: "Invalid Search",
            description: "There was an error with your search.",
          });
        });
    } else {
      setIsLoading(false);
      setResults(null);
    }
  }, [search]);

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
        <kbd className="pointer-events-none absolute right-1.5 top-1.5 hidden h-5 select-none items-center gap-1 rounded border bg-background px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100 sm:flex">
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
          <CommandGroup heading={"Results"}>
            {!isLoading &&
              results &&
              results.map((book: BookData) => (
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
        </CommandList>
      </CommandDialog>
    </>
  );
}
