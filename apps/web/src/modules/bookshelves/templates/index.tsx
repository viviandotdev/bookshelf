import React from "react";
import BooksViewer from "../components/books-viewer";


interface BookshelvesTemplateProps {
    shelf: string;
}

export default function BookshelvesTemplate({ shelf }: BookshelvesTemplateProps) {

    return (
        <>
            <BooksViewer shelf={shelf}>

            </BooksViewer>



        </>

    );
}
