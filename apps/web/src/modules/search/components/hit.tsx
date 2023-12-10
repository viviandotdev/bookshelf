"use client"
import { BookCard, BookInfo } from "@/components/book-card"
import BookCover from "@/components/book-cover"
import { Button } from "@/components/ui/button"
import useCreateUserBook from "@/modules/book/api/use-create-user-book"
import { useEffect, useState } from "react"
import { useFirstRender } from "@/hooks/use-first-render"
import { BookRating } from "@/components/rating"
import BookActions from "@/components/book-actions"
import { useUserBookLazyQuery } from "@/graphql/graphql"
import { toast } from "@/hooks/use-toast"
import { useRouter } from "next/navigation"
import { BookData } from "@/types/interfaces"

export type HitProps = {
    hit: BookData
}

const Hit = ({ hit }: HitProps) => {
    const [status, setStatus] = useState("");
    const [rating, setRating] = useState(0);
    const [isLoading, setIsLoading] = useState(false);
    const [openAlert, setOpenAlert] = useState(false);
    const [openModal, setOpenModal] = useState(false);
    const [openDropdown, setOpenDropdown] = useState(false);
    const router = useRouter();
    const { createUserBook } = useCreateUserBook();
    const [loadBook] =
        useUserBookLazyQuery({
            fetchPolicy: "cache-and-network",
            nextFetchPolicy: "cache-first",
            notifyOnNetworkStatusChange: true,
            onError: (error) => {
                toast({
                    title: error.message,
                    variant: "destructive",
                });
            },
            onCompleted: (data) => {
                setStatus(data.userBook?.status as string);
                setRating(data.userBook?.rating as number);
            },
            errorPolicy: "all",
        })
    useEffect(() => {
        const loadData = async () => {
            await loadBook({ variables: { where: { id: hit.id } } });
        };
        loadData();
    }, [])
    return (
        <BookCard
            book={hit}
            content={
                <BookCard.BookContent
                    image={<BookCover src={hit.image} size={"sm"} />}
                    info={<BookInfo />}
                />
            }
        // actions={
        //     status ?
        //         < BookCard.BookActions
        //             buttons={[
        //                 <BookActions
        //                     openDropdown={openDropdown}
        //                     setOpenDropdown={setOpenDropdown}
        //                     setOpenModal={setOpenModal}
        //                     setOpenAlert={setOpenAlert}
        //                     status={status}
        //                     setStatus={setStatus}
        //                     book={hit}
        //                     setRating={setRating}
        //                     rating={rating}
        //                     // shelves={hit.userBook?.shelves!}
        //                     // loadEntry={loadEntry}
        //                     type="button"
        //                     showRemoveBook={false}
        //                 />
        //             ]}
        //             rating={
        //                 <div className="flex gap-2 text-sm font-medium pb-2">
        //                     My Rating:  <BookRating rating={rating} setRating={setRating} bookId={hit.id} />
        //                 </div>
        //             }
        //         />
        //         : <>
        //             < BookCard.BookActions
        //                 buttons={[
        //                     <Button
        //                         onClick={async (e) => {
        //                             e.stopPropagation();
        //                             setIsLoading(true)
        //                             await createUserBook(hit);
        //                             setIsLoading(false)
        //                             setStatus("Want to Read")
        //                         }}
        //                         disabled={isLoading}
        //                         className="bg-primary text-white"
        //                         variant={"tag"}
        //                         size={"xs"}
        //                     >
        //                         Want to Read
        //                     </Button>,
        //                     ,
        //                 ]}
        //                 rating={
        //                     <div className="flex gap-2 text-sm font-medium pb-2">
        //                         My Rating:  <BookRating rating={rating} setRating={setRating} bookId={hit.id} />
        //                     </div>
        //                 }
        //             />
        //         </>

        // }
        />
    )
}

export default Hit
