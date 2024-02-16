import { dm_sefif_display } from "@/lib/fonts";
import { cn, formatDate } from "@/lib/utils";
import { BookData, User } from "@/types/interfaces";
import React from "react";
import Image from "next/image";
import { Shelf, Review } from "@/graphql/graphql";
import ActionsPanel from "@/modules/book/components/actions-panel";
import BookInfo from "@/modules/book/components/book-info";
import ReviewCard from "../components/review-card";
import BookStatusModal from "@/components/modals/book-status-modal";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
interface BookTemplateProps {
    book: BookData;
    shelves: Shelf[];
    reviews: Review[];
    user: User;

}

export default function BookTemplate({ book, shelves, reviews, user }: BookTemplateProps) {


    const reviewed = reviews.filter((review) => review.userBook?.user?.id === user?.id);
    return (
        <div className="my-12">
            <BookStatusModal />
            <div className="grid w-full grid-cols-5 gap-2 ">
                <section className="p-4 hidden xl:block xl:col-span-1">
                    <Image
                        width={184}
                        height={277}
                        src={book.coverImage}
                        className="max-w-none w-[fill-available] rounded-lg"
                        alt="Picture of the author"
                    />
                    <div className="mt-3 text-xs font-light">
                        <div>{book.pageCount} Pages</div>
                        <div>First published {formatDate(book.publishedDate)}</div>
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
                                <BookInfo processedBook={book} />
                            </section>
                            <section className="col-span-2">
                                <ActionsPanel book={book} shelves={shelves} reviewed={reviewed.length > 0} />
                            </section>
                        </div>
                        <div className="pt-8">
                            <div className="flex justify-between">
                                <div className="text-sm text-beige">POPULAR REVIEWS</div>
                                <div className="text-sm text-beige">MORE</div>
                            </div>
                            <hr className="border-t-1 border-beige" />

                            {reviews.length > 0 ?
                                <div>
                                    {reviews.map((review) => {
                                        return (
                                            <ReviewCard
                                                key={review.id}
                                                review={review}
                                            />
                                        );

                                    })}
                                </div>
                                :
                                <div className="bg-white shadow-sm">
                                    <div className="mt-4 flex justify-between ">
                                    </div>
                                    <div className="p-6 bg-gray-100 text-center rounded-md">
                                        <p>There are no reviews for this book.</p>
                                    </div>
                                </div>
                            }
                        </div>

                    </div>
                </section>
            </div>
        </div>
    );
}
