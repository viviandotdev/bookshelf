"use client"
import BookCover from '@/components/book-cover';
import { Icons } from '@/components/icons';
import { Card, CardContent } from '@/components/ui/card';
import { UserBook } from '@/graphql/graphql';
import React from 'react'

interface ReadingCardProps {
    userBook: UserBook;
}

export const ReadingCard: React.FC<ReadingCardProps> = ({ userBook }) => {


    if (!userBook) return null;
    const { book, shelves } = userBook;
    return (
        <Card className="w-full min-w-76">
            <CardContent className="p-2.5 shadow-md">
                <div className="flex space-x-4">

                    <BookCover src={book?.coverImage} size={"xs"} />
                    <div className="flex flex-col justify-center">
                        <div className="">
                            <h3 className="text-base font-medium text-gray-900">{book?.title}</h3>
                            <p className="text-sm text-gray-600">{book?.author}</p>
                            <p className="flex items-center text-sm text-gray-500 gap-1">
                                <Icons.read className="h-4 w-4 text-gray-400" />
                                Finished
                            </p>
                        </div>

                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
export default ReadingCard
