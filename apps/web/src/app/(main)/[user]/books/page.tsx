import { getShelves } from "@/modules/shelf/queries/getShelves";
import React from "react";
import Sidebar from "@/modules/bookshelves/components/sidebar";
import BookshelvesTemplate from "@/modules/bookshelves/templates/bookshelves";

interface BookshelvesPageProps { }

export default async function BooksPage({ }: BookshelvesPageProps) {
    const { library, shelves } = await getShelves();
    return (
        <>
            <div className="flex flex-1  " style={{ height: 'calc(100vh - 96px)' }}>
                <div className="flex bg-beige-50 py4 overflow-y-auto h-[80vh]" style={{ height: 'calc(100vh - 96px)' }}>
                    <Sidebar
                        librarySelections={library}
                        shelfSelections={shelves}
                    />
                </div>
                <div className="flex flex-1 flex-col border-l border-gray-200">
                    <div className="w-full pt-3.5 bg-beige-50 overflow-y-auto " style={{ height: 'calc(100vh - 96px)' }}>
                        <BookshelvesTemplate />
                    </div>
                </div>
            </div>


        </>
    );
}
