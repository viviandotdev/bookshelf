import { dm_sefif_display } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import React from "react";
import ImportActions from "../../../../modules/profile/components/import-actions";

interface ImportPageProps { }

export default async function ImportPage({ }: ImportPageProps) {
    return (
        <div className="bg-white flex flex-col items-center pr-1">
            <div className="flex max-w-[1457px] flex-col px-5 max-md:max-w-full max-md:mt-10">
                <div className={cn(dm_sefif_display.className, "text-5xl mt-20 text-beige")}>
                    Goodreads Import
                </div>
                <div className="text-black text-base self-stretch -mr-5 mt-4 max-md:max-w-full max-md:mt-10">
                    Import of all your Goodreads books, shelves, rating, and reviews
                </div>
                <hr className="mt-2 mb-2 border-b border-beige" />
                <ImportActions />
            </div>
        </div>
    );
}
