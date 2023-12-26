import React from "react";
import { CreateShelfModal } from "@/modules/bookshelves/components/modals/create-shelf-modal";
import { dm_sefif_display } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import ShelfMenu from "../components/shelf-menu";
import { SortingOptions } from "../components/sorting-options";
import StatusMenu from "../components/status-menu";
import BooksViewer from "../components/books-viewer";
import { ViewOptions } from "../components/view-options";


interface BookshelvesTemplateProps {
}

export default function BookshelvesTemplate({ }: BookshelvesTemplateProps) {

    return (
        <>
            <div className="col-span-4 xl:col-span-3 pt-1.5">
                <BooksViewer>
                    <h1
                        className={cn(
                            dm_sefif_display.className,
                            "text-primary text-4xl mb-8"
                        )}
                    >
                        Bookshelves
                    </h1>
                </BooksViewer>
            </div >
            <CreateShelfModal />
        </>

    );
}
