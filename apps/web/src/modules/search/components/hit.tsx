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
import BookActions from "@/components/book-actions"

export type HitProps = {
    hit: BookHit
}

const Hit = ({ hit }: HitProps) => {
    const [status, setStatus] = useState(hit.userBook?.status);
    const [rating, setRating] = useState(hit.userBook?.rating);
    const [isLoading, setIsLoading] = useState(false);
    const firstRender = useFirstRender();
    const [openAlert, setOpenAlert] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);
    const { createUserBook } = useCreateUserBook();
    useEffect(() => {
        // Check if userBook.status is different from the current status state
        if (!firstRender && hit.userBook?.status !== status) {
            setStatus(hit.userBook?.status); // Update the status
        }
    }, [hit.userBook?.status]); // Run the effect whenever userBook.status changes
    return (
        <BookCard
            book={hit.book}
            content={
                <BookCard.BookContent
                    image={<BookCover src={hit.book.image} size={"sm"} />}
                    info={<BookInfo />}
                />
            }
            actions={
                status ?
                    < BookCard.BookActions
                        buttons={[
                            <BookActions
                                openDropdown={openDropdown}
                                setOpenDropdown={setOpenDropdown}
                                setOpenModal={setOpenModal}
                                setOpenAlert={setOpenAlert}
                                status={status}
                                setStatus={setStatus}
                                book={hit.book}
                                setRating={setRating}
                                rating={rating}
                                shelves={hit.userBook?.shelves!}
                                // loadEntry={loadEntry}
                                type="button"
                                showRemoveBook={false}
                            />
                        ]}
                        rating={
                            <div className="flex gap-2 text-sm font-medium pb-2">
                                My Rating:  <BookRating rating={rating} setRating={setRating} bookId={hit.book.id} />
                            </div>
                        }
                    />
                    : <>
                        < BookCard.BookActions
                            buttons={[
                                <Button
                                    onClick={async (e) => {
                                        e.stopPropagation();
                                        setIsLoading(true)
                                        await createUserBook(hit.book);
                                        setIsLoading(false)
                                        setStatus("Want to Read")
                                    }}
                                    disabled={isLoading}
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
                                    My Rating:  <BookRating rating={rating} setRating={setRating} bookId={hit.book.id} />
                                </div>
                            }
                        />
                    </>

            }
        />
    )
}

export default Hit
