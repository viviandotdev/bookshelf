"use client"
export type BookHit = BookData & {
    userBook?: {
        // Add any additional properties related to userBook here
        status: boolean;
        rating: number;
    };
};

import { BookCard, BookInfo } from "@/components/book-card"
import BookCover from "@/components/book-cover"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { BookData } from "@/types/interfaces"

export type HitProps = {
    hit: BookHit
}

const Hit = ({ hit }: HitProps) => {
    return (
        <BookCard
            book={hit}
            content={
                <BookCard.BookContent
                    image={<BookCover src={hit.image} size={"sm"} />}
                    info={<BookInfo />}
                />
            }
            actions={
                hit.userBook ?
                    < BookCard.BookActions
                        buttons={[
                            <Button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    console.log("currently reading clicked")
                                }}
                                variant={"tag"}
                                size={"xs"}
                            >
                                Currently reading
                                <Icons.chevronDown className="h-4 w-4" />
                            </Button>,
                            <Button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    console.log("currently reading clicked")
                                }}
                                variant={"tag"}
                                size={"xs"}
                            >
                                Edit
                            </Button>,
                            ,
                        ]}
                    />
                    : <></>

            }
        />
    )
}

export default Hit
