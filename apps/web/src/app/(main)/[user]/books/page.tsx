import { getShelves } from "@/modules/shelf/queries/getShelves";
import SideBar from "@/modules/shelf/components/shelf-sidebar";
import React from "react";
import { Book } from "lucide-react";
import Sidebar from "@/modules/bookshelves/templates/sidebar";
import BookshelvesTemplate from "@/modules/bookshelves/templates/bookshelves";

interface BookshelvesPageProps { }

export default async function BooksPage({ }: BookshelvesPageProps) {
    const { library, shelves } = await getShelves();
    return (
        <>
            {/* <div className="w-full grid grid-cols-4 gap-6">
                <SideBar
                    librarySelections={library}
                    shelfSelections={shelves}
                />
                <BookshelvesTemplate />
            </div > */}


            <div className="flex flex-1 overflow-hidden">
                <div className="flex bg-beige-50 py4 overflow-y-auto ">
                    <Sidebar />
                </div>
                <div className="flex flex-1 flex-col border border-gray-100">

                    <div className="w-full pt-1.5 mt-2 bg-beige-50 overflow-y-auto pl-16 pr-32 ">
                        <BookshelvesTemplate />
                    </div>
                </div>
            </div>


        </>
    );
}
