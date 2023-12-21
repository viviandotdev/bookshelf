"use client"
import { UserBook } from '@/graphql/graphql';
import React, { useEffect, useState } from 'react'
import ColumnItem from './column-item';



export type ColumnWithBooks = {
    title: string,
    books: UserBook[]
};

// export type CardWithList = Card & { list: List };


interface ColumnContainerProps {
    data: ColumnWithBooks[];
}

export const ColumnContainer: React.FC<ColumnContainerProps> = ({ data }) => {
    const [orderedData, setOrderedData] = useState(data);
    useEffect(() => {
        console.log("data", orderedData)
        console.log("data", data)
        setOrderedData(data)
    }, [data])
    return (
        <div>
            <ol className="flex gap-x-3 h-full">
                {orderedData.map((list, index) => {
                    return (
                        <ColumnItem
                            key={index}
                            index={index}
                            data={list}
                        />
                    )
                })}
            </ol>

        </div>
    );
}
export default ColumnContainer
