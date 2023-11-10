"use client";
import React from "react";
import {
    Shelf,
    UserBook,

} from "@/graphql/graphql";

import Book from "../../../components/book";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { ContentNav } from "@/modules/layout/components/content-nav";
import ShelfMenu from "./shelf-menu";
import StatusMenu from "./status-menu";
import { LucideIcon } from "lucide-react";
import useCreateQueryString from "../hooks/use-create-query-string";
import { SortingOptions } from "./sorting-options";
interface BookListProps {
    books: UserBook[];
    selectedStatus: { name: string, icon: LucideIcon };
    setSelectedStatus: React.Dispatch<React.SetStateAction<{ name: string, icon: LucideIcon }>>;
    setQueryFilter: React.Dispatch<React.SetStateAction<{}>>;
}

const BookList: React.FC<BookListProps> = ({ books, selectedStatus,
    setSelectedStatus,
    setQueryFilter }) => {
    const router = useRouter()
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [isPending, startTransition] = React.useTransition()
    // Search params
    const page = searchParams?.get("page") ?? "1"
    const sort = searchParams?.get("sort") ?? "createdAt.desc"
    const shelvesParam = searchParams?.get("shelves")
    // Use the custom hook



    return (
        <>
            <ContentNav>
                <div className="flex gap-2">
                    <ShelfMenu />
                    <StatusMenu selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} setQueryFilter={setQueryFilter} />
                </div>
                <SortingOptions sort={sort} />
            </ContentNav>
            <div className="grid grid-cols-3 md:grid-cols-5 gap-4 justify-center overflow-hidden px-4 pt-2 pb-10">
                {books &&
                    books?.map((book, idx) => (
                        <div key={idx}>
                            <Book userBook={book} showRemoveBook={true} />
                        </div>
                    ))}
            </div>
        </>
    );
};
export default BookList;
