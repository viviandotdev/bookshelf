"use client";
import React, { useEffect, useState } from "react";
import { useAppSelector } from "@/stores";
import BookList from "@/modules/bookshelves/components/book-list";
import useUserBookQuery from "@/modules/bookshelves/hooks/use-user-book-query";
import { CreateShelfModal } from "@/modules/bookshelves/components/modals/create-shelf-modal";
import { useCountUserBooksLazyQuery } from "@/graphql/graphql";
import { BOOKS_PAGE_SIZE } from "@/lib/constants";
import { NetworkStatus } from "@apollo/client";
import useLoadBooks from "../../../api/use-load-books";
import useShelfStore from "@/stores/use-shelf-store";

interface BookshelvesTemplateProps {
}

export default function BookshelvesTemplate({ }: BookshelvesTemplateProps) {
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

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    return (
        <>
            <div className="col-span-4 xl:col-span-3 pt-1.5">
                <BookList
                    books={books}
                    totalPages={totalPages}
                />

            </div>
            <CreateShelfModal />
        </>

    );
}
