import { Button } from "@/components/ui/button";
import { authOptions } from "@/lib/auth/auth";
import { getCurrentUser } from "@/lib/auth/session";
import { dm_sefif_display } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { redirect } from "next/navigation";
import React from "react";
import ImportActions from "../import-actions";

interface ImportPageProps { }

export default async function ImportPage({ }: ImportPageProps) {
    const user = await getCurrentUser();
    if (!user) {
        redirect(authOptions?.pages?.signIn || "/login");
    }

    return (
        <div className="bg-white flex flex-col items-center pr-1">
            <div className="flex max-w-[1457px] flex-col px-5 max-md:max-w-full max-md:mt-10">
                <div className={cn(dm_sefif_display.className, "text-5xl mt-20 text-primary")}>
                    Goodreads Import
                </div>
                <div className="text-black text-md self-stretch -mr-5 mt-4 max-md:max-w-full max-md:mt-10">
                    Import of all your Goodreads books, shelves, rating, and reviews
                </div>
                <hr className="mt-2 mb-2 border-b border-primary" />
                <ImportActions />
            </div>
        </div>
    );
}
