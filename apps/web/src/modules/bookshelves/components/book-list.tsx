"use client";
import React from "react";
import {
    UserBook,

} from "@/graphql/graphql";

import Book from "../../../components/book";
import { useSearchParams } from "next/navigation";
import { ContentNav } from "@/modules/layout/components/content-nav";
import ShelfMenu from "./shelf-menu";
import StatusMenu from "./status-menu";
import { SortingOptions } from "./sorting-options";
import { Pagination } from "@/components/pagination";
interface BookListProps {
    books: UserBook[];
    fetchMore: any;
    totalPages: number;
    setQuery: React.Dispatch<React.SetStateAction<{}>>;
}

const BookList: React.FC<BookListProps> = ({ books, fetchMore, totalPages,
    setQuery }) => {
    const searchParams = useSearchParams()

    // Search params
    const page = searchParams?.get("page") ?? "1"
    const status = searchParams?.get("status") ?? "Any Status"
    const sort = searchParams?.get("sort") ?? "createdAt.desc"
    const shelfParam = searchParams?.get("shelf")


    return (
        <>
            <ContentNav>
                <div className="flex gap-2">
                    <ShelfMenu setQuery={setQuery} />
                    <StatusMenu status={status} setQuery={setQuery} />
                </div>
                <SortingOptions setQuery={setQuery} sort={sort} />
            </ContentNav>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 justify-center overflow-hidden px-4 pt-2 pb-10">
                {books &&
                    books?.map((book, idx) => (
                        <div key={idx}>
                            <Book userBook={book} showRemoveBook={true} />
                        </div>
                    ))}
            </div>
            <Pagination
                page={page}
                totalPages={totalPages}
                fetchMore={fetchMore}
            />
        </>
    );
};
export default BookList;
