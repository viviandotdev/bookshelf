"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Book from "../../../components/book";
import { useSearchParams } from "next/navigation";
import { Pagination } from "@/components/pagination";
import useUserBookQuery from "@/modules/bookshelves/hooks/use-user-book-query";
import { useCountUserBooksLazyQuery } from "@/graphql/graphql";
import { BOOKS_PAGE_SIZE, DEFAULT_BOOKCOVER_PLACEHOLDER } from "@/lib/constants";
import { NetworkStatus } from "@apollo/client";
import useLoadBooks from "../../../api/use-load-books";
import useShelfStore from "@/stores/use-shelf-store"
interface BookListProps {
}

const BookList: React.FC<BookListProps> = ({
}) => {
    const searchParams = useSearchParams()
    const page = searchParams?.get("page") ?? "1"
    const query = useUserBookQuery();
    const [totalPages, setTotalPages] = useState(0);
    const { library } = useShelfStore()

    const [getCount] = useCountUserBooksLazyQuery({
        onCompleted: (data) => {
            setTotalPages(Math.ceil(data!.countUserBooks / BOOKS_PAGE_SIZE))
        }
    });
    const { loadBooks, booksData, networkStatus } = useLoadBooks();

    const books = booksData && booksData?.userBooks
    const loading = networkStatus === NetworkStatus.loading;

    useEffect(() => {
        const loadData = async () => {
            await loadBooks({ variables: { ...query } });
            await getCount({ variables: { ...query } });
        };

        loadData();
    }, [query, loadBooks, getCount, library]);

    if (loading) {
        return <div className="grid grid-cols-3 md:grid-cols-5 gap-4 justify-center overflow-hidden px-4 pt-2 pb-10">
            {
                Array.from({ length: 10 }, (_, idx) => (
                    <div key={idx}>
                        <div className={`cursor-pointer group/item relative transition shadow-md duration-300 ease-in-out transform`}>
                            <div className={`flex-row cursor-pointer`}>
                                <div className={`relative flex items-start`}>
                                    <div className={`relative opacity-30 flex items-start bg-muted-foreground w-[176px] h-[224px]`} >
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
        </div >
    }


    return (
        <>
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
            />
        </>
    );
};
export default BookList;
