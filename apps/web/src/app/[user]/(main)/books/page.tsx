import { getShelves } from "@/modules/shelf/queries/getShelves";
import React from "react";
import Sidebar from "@/modules/shelf/components/shelf-sidebar";
import BookshelvesTemplate from "@/modules/bookshelves/templates";

interface BookshelvesPageProps {


}

export default async function BooksPage({ searchParams }: { searchParams: { [key: string]: string | string[] | undefined } }) {
    console.log(searchParams);
    const { library, shelves } = await getShelves();
    return (
        <>
            <div className="flex flex-1" style={{ height: 'calc(100vh - 96px)' }}>
                <div className="flex bg-beige-50 py4 overflow-y-auto h-[80vh]" style={{ height: 'calc(100vh - 96px)' }}>
                    <Sidebar
                        librarySelections={library}
                        shelfSelections={shelves}
                    />
                </div>
                <div className="flex flex-1 flex-col border-l border-gray-200">
                    <BookshelvesTemplate shelf={searchParams.shelf} />
                </div>
            </div>


        </>
    );
}
