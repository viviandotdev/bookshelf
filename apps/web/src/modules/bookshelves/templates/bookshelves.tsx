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
            <BooksViewer>
                <div className="flex justify-between py-4">
                    <div className="flex gap-2">
                        <h1
                            className={cn(
                                dm_sefif_display.className,
                                "text-beige text-5xl"
                            )}
                        >
                            All Books
                        </h1>
                        <p className="text- text-gray-400 self-end mx-4 py-2">151 Books</p>
                    </div>
                    <div className="flex space-x-2 self-start">
                        <LayoutGridIcon className="text-gray-600" />
                        <ListIcon className="text-gray-600" />
                        <ListIcon className="text-gray-600" />
                    </div>
                </div>

            </BooksViewer>
        </>

    );
}
