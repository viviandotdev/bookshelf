"use client"
import React, { useEffect } from "react";
import { Dot } from "lucide-react";
import { cn } from "@/lib/utils";
import useShelfStore from "@/stores/use-shelf-store";
import { Shelf, UserBook } from "@/graphql/graphql";
import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import Book from "@/components/book";
import ReadingCard from "./reading-card";
import { dm_sefif_display } from "@/lib/fonts";

interface CurrentlyReadingSectionProps {
    booksData: UserBook[];
    heading?: string;
    details?: {
        progress: number;
        date_started: string;
    };
    shelves: Shelf[]
}

export const CurrentlyReadingSection: React.FC<CurrentlyReadingSectionProps> = ({
    booksData,
    heading,
    details,
    shelves
}) => {
    const { initShelves } = useShelfStore();
    useEffect(() => {
        (initShelves(shelves));
    }, []);

    return (
        <>

            <section aria-labelledby="currently-reading-heading">
                <h2 className={cn(
                    dm_sefif_display.className,
                    "text-2xl font-semibold text-beige-700 mb-4"
                )}>Currently Reading</h2>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {booksData && booksData.map((book, idx) => (
                        <ReadingCard userBook={book} />
                    ))}
                </div>
            </section>

        </>
    );
};
