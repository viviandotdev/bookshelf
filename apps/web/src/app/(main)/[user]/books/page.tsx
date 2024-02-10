import { getShelves } from "@/modules/shelf/queries/getShelves";
import React from "react";
import Sidebar from "@/modules/bookshelves/components/sidebar";
import BookshelvesTemplate from "@/modules/bookshelves/templates/bookshelves";

interface BookshelvesPageProps { }

export default async function BooksPage({ }: BookshelvesPageProps) {
    const { library, shelves } = await getShelves();
    return (
        <>
            <div className="flex flex-1 overflow-hidden">
                <div className="flex bg-beige-50 py4 overflow-y-auto ">
                    <Sidebar
                        librarySelections={library}
                        shelfSelections={shelves}
                    />
                </div>
                <div className="flex flex-1 flex-col border-l border-gray-200">
                    <div className="w-full pt-3.5 bg-beige-50 overflow-y-auto">
                        <BookshelvesTemplate />
                    </div>
                </div>
            </div>


        </>
    );
}
