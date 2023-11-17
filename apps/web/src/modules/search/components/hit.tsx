"use client"
import { BookCard, BookInfo } from "@/components/book-card"
import BookCover from "@/components/book-cover"
import { Icons } from "@/components/icons"
import { Button } from "@/components/ui/button"
import { BookHit } from "../templates"
import useCreateUserBook from "@/modules/book/hooks/use-create-user-book"
import { useEffect, useState } from "react"
import { useFirstRender } from "@/hooks/use-first-render"
import { BookRating } from "@/components/rating"

export type HitProps = {
    hit: BookHit
}

const Hit = ({ hit }: HitProps) => {
    const [status, setStatus] = useState(hit.userBook?.status);
    const [rating, setRating] = useState(hit.userBook?.rating);
    const firstRender = useFirstRender();
    const { createUserBook } = useCreateUserBook();
    useEffect(() => {
        // Check if userBook.status is different from the current status state
        if (!firstRender && hit.userBook?.status !== status) {
            setStatus(hit.userBook?.status); // Update the status
        }
    }, [hit.userBook?.status]); // Run the effect whenever userBook.status changes

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
                status ?
                    < BookCard.BookActions
                        buttons={[
                            <Button
                                onClick={(e) => {
                                    e.stopPropagation();
                                    console.log("currently reading clicked")
                                }}
                                className="gap-2"
                                variant={"tag"}
                                size={"xs"}
                            >
                                {status ? "Currently Reading" : "Want to Read"}
                                <Icons.chevronDown className="h-4 w-4" />
                            </Button>,
                            ,
                        ]}
                        rating={
                            <div className="flex gap-2 text-sm font-medium pb-2">
                                My Rating:  <BookRating rating={rating} setRating={setRating} bookId={hit.id} />
                            </div>
                        }
                    />
                    : <>
                        < BookCard.BookActions
                            buttons={[
                                <Button
                                    onClick={async (e) => {
                                        e.stopPropagation();
                                        await createUserBook(hit);
                                        setStatus("Want to Read")
                                    }}
                                    className="bg-primary text-white"
                                    variant={"tag"}
                                    size={"xs"}
                                >
                                    Want to Read
                                </Button>,
                                ,
                            ]}
                            rating={
                                <div className="flex gap-2 text-sm font-medium pb-2">
                                    My Rating:  <BookRating rating={rating} setRating={setRating} bookId={hit.id} />
                                </div>
                            }
                        />
                    </>

            }
        />
    )
}

export default Hit
