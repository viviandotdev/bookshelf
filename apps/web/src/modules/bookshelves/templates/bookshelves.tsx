import React from "react";
import { dm_sefif_display } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import BooksViewer from "../components/books-viewer";
import { LayoutGridIcon, ListIcon } from "lucide-react";


interface BookshelvesTemplateProps {
}

export default function BookshelvesTemplate({ }: BookshelvesTemplateProps) {

    return (
        <>
            <div className="w-full pt-1.5 mt-5 bg-beige-50 overflow-y-auto pl-4 pr-32">
                <BooksViewer>
                    <div className="flex justify-between py-4">
                        <div className="flex gap-2">
                            <h1
                                className={cn(
                                    dm_sefif_display.className,
                                    "text-beige text-5xl"
                                )}
                            >
                                Bookshelves
                            </h1>
                            <p className="text-sm text-gray-600 self-end mx-4 py-2">151 Books</p>
                        </div>
                        <div className="flex space-x-2 self-start">
                            <LayoutGridIcon className="text-gray-600" />
                            <ListIcon className="text-gray-600" />
                            <ListIcon className="text-gray-600" />
                        </div>
                    </div>

                </BooksViewer>
            </div >
        </>

    );
}
