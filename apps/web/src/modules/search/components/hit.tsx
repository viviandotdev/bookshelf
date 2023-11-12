
// export type BookHit = {
//     id: string
//     title: string
//     handle: string
//     description: string | null
//     thumbnail: string | null
//     variants: ProductVariant[]
//     collection_handle: string | null
//     collection_id: string | null
// }

import BookCard, { BookInfo } from "@/components/book-card"
import BookCover from "@/components/book-cover"
import { Icons } from "@/components/icons"
import { BookData } from "@/types/interfaces"

export type HitProps = {
    hit: BookData
}

const Hit = ({ hit }: HitProps) => {
    return (
        // <BookCard
        //     book={hit}
        //     content={
        //         <BookCard.BookContent
        //             image={<BookCover src={hit.image} size={"sm"} />}
        //             info={<BookInfo />}
        //         />
        //     }
        //     actions={
        //         <BookCard.BookActions
        //             buttons={[
        //                 <>
        //                     Currently reading
        //                     <Icons.chevronDown className="h-4 w-4" />
        //                 </>
        //                 ,
        //                 <>
        //                     Edit
        //                 </>
        //             ]}
        //         />
        //     }
        // />
        <div>{hit.title}</div>

    )
}

export default Hit
