import { dm_sefif_display } from "@/lib/fonts";
import { cn, formatDate } from "@/lib/utils";
import { BookData } from "@/types/interfaces";
import React from "react";
import Image from "next/image";
import { Shelf, UserBook } from "@/graphql/graphql";
import ActionsPanel from "@/modules/book/components/actions-panel";
import BookInfo from "@/modules/book/components/book-info";
import { BookStatusModal } from "../components/book-status-modal";
import Review from "../components/review";
interface BookTemplateProps {
    book: BookData;
    shelves: Shelf[];
}

export default function BookTemplate({ book, shelves, }: BookTemplateProps) {
    return (
        <>
            <BookStatusModal />
            <div className="grid w-full grid-cols-5 gap-2 ">
                <section className="p-4 hidden xl:block xl:col-span-1">
                    <Image
                        width={184}
                        height={277}
                        src={book.image}
                        className="max-w-none w-[fill-available] rounded-lg"
                        alt="Picture of the author"
                    />
                    <div className="mt-3 text-[12px] font-light">
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
                                <ActionsPanel book={book} shelves={shelves} />
                            </section>
                        </div>
                        <div className="pt-8">
                            <div className="flex justify-between">
                                <div className="text-sm text-primary">POPULAR REVIEWS</div>
                                <div className="text-sm text-primary">MORE</div>
                            </div>
                            <hr className="border-t-1 border-primary" />

                            <div>
                                {/* review card */}
                                <Review name={"test"} rating={0} comments={0} content={"asldfjlasdf"} likes={0} />
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        </>
    );
}
