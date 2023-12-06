
import book from '@/components/book';
import { BookInfo } from '@/components/book-card';
import { Book, Shelf, Review, User } from '@/graphql/graphql';
import { dm_sefif_display } from '@/lib/fonts';
import { formatDate, cn } from '@/lib/utils';
import ActionsPanel from '@/modules/book/components/actions-panel';
import { BookStatusModal } from '@/modules/book/components/book-status-modal';
import React from 'react'
import Image from "next/image";
import ReviewInfo from '../components/review-info';
import CommentForm from '../components/comment-form';
import CommentCard from '../components/comment-card';
import CommentSection from '../components/comment-section';

interface ReviewTemplateProps {
    book: Book
    shelves: Shelf[];
    review: Review;
    user: User
}

export const ReviewTemplate: React.FC<ReviewTemplateProps> = ({ shelves, review, book, user }) => {
    const { comments } = review

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
                    <div className="mt-3 text-[12px] font-light">
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
                            <section className="flex flex-col gap-2 col-span-4 pr-4">
                                <ReviewInfo review={review} />
                            </section>
                            <section className="col-span-2">
                                <ActionsPanel book={book} shelves={shelves} reviewed={review.userBook?.user.id == user.id} reviewId={review.id} />
                            </section>
                        </div>
                        <div className="pt-8">
                            <div className="flex justify-between">
                                <div className="text-sm text-primary">122 COMMENTS Showing 1-20 of 20</div>
                                {/* <div className="text-sm text-primary">MORE</div> */}
                            </div>
                            <hr className="border-t-1 border-primary" />
                            <CommentSection comments={comments || []} reviewId={review.id} />
                        </div>

                    </div>
                </section>
            </div>
        </>
    );
}
export default ReviewTemplate
