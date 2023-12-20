import React from 'react'
import ColumnContainer from './column-container';

interface BoardProps {

}

export const Board: React.FC<BoardProps> = ({ }) => {
    return (
        <div>
            <ColumnContainer />

        </div>
    );
}
export default Board
// query each column
// this is so we can paginate each one separately

// a card gets an order if it is
// added to a column
