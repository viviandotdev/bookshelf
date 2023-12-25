"use client"
import React from 'react'
import Board from './board';
import { BookList } from './book-list';

interface BooksViewerProps {

}

export const BooksViewer: React.FC<BooksViewerProps> = ({ }) => {
    const [showBoard, setShowBoard] = React.useState(false);

    return (
        <div>
            {showBoard ? <Board /> : <BookList />}



        </div>
    );
}
export default BooksViewer
