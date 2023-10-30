import { getShelves } from "@/modules/bookshelves/api/getShelves";
import BookshelvesTemplate from "@/modules/bookshelves/templates";
import React from "react";

interface BookshelvesPageProps { }

export default async function BooksPage({ }: BookshelvesPageProps) {
    const { library, shelves } = await getShelves();
    return (
        <>
            <BookshelvesTemplate
                librarySelections={library}
                shelfSelections={shelves}
            />
        </>
    );
}
