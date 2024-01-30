
import { Book, Shelf, User } from '@/graphql/graphql';
import { dm_sefif_display } from '@/lib/fonts';
import { formatDate, cn } from '@/lib/utils';
import React from 'react'
import Image from "next/image";
import CommentSection from '../components/comment-section';
import ReviewSection from '../components/review-section';
import BookStatusModal from '@/components/modals/book-status-modal';

interface ReviewTemplateProps {
    book: Book
    shelves: Shelf[]
    reviewId: string
    user: User
}

// fix this review does get need to fetched server side, it will all be fetched client side

export const ReviewTemplate: React.FC<ReviewTemplateProps> = ({ shelves, book, reviewId, user }) => {

    return (
        <>
            <BookStatusModal />
            <div className="grid w-full grid-cols-5 gap-2 ">
                <section className="p-4 hidden xl:block xl:col-span-1">
                    <Image
                        width={184}
                        height={277}
                        src={book && book.coverImage}
                        className="max-w-none w-[fill-available] rounded-lg"
                        alt="Picture of the author"
                    />
                    <div className="mt-3 text-xs font-light">
                        <div>{book.pageCount} Pages</div>
                        <div>First published {formatDate(book.publishedDate) || ''}</div>
                    </div>
                </section>
                <section className=" p-4 col-span-5 xl:col-span-4 grid gap-2">
                    <div className="grid gap-2">
                        <div className="flex items-center">
                            <h1
                                className={cn(
                                    dm_sefif_display.className,
                                    "text-4xl/[1.25] mr-4"
                                )}
                            >
                                {book.title}
                            </h1>
                            <span className="inline text-base">by {book.author}</span>
                        </div>
                        <div className="grid grid-cols-6 gap-2">
                            <ReviewSection reviewId={reviewId} book={book} shelves={shelves} user={user} />
                        </div>
                        <div className="pt-8">
                            <CommentSection reviewId={reviewId} />
                        </div>

                    </div>
                </section>
            </div>
        </>
    );
}
export default ReviewTemplate
