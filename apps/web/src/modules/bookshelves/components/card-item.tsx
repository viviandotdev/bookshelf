import { UserBook } from '@/graphql/graphql';
import React from 'react'

interface CardItemProps {
    data: UserBook;
    index: number;
}

export const CardItem: React.FC<CardItemProps> = ({ data, index }) => {

    return (
        <div
            className="truncate border-2 border-transparent hover:border-black py-2 px-3 text-sm bg-white rounded-md shadow-sm"
        >
            {data.book!.title}
        </div>
    );
}
export default CardItem
