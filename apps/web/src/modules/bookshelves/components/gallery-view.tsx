"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { Pagination } from "@/components/pagination";
import useBuildQuery from "@/modules/bookshelves/hooks/use-build-query";
import { useCountUserBooksLazyQuery } from "@/graphql/graphql";
import { BOOKS_PAGE_SIZE } from "@/lib/constants";
import { NetworkStatus } from "@apollo/client";
import useLoadBooks from "../queries/use-load-books";
import useShelfStore from "@/stores/use-shelf-store"
import SkeletonGalleryView from "@/modules/skeletons/components/skeleton-gallery-view";
import Book from "@/components/book";
interface GalleryViewProps {
}

export const GalleryView: React.FC<GalleryViewProps> = ({
}) => {
    const searchParams = useSearchParams()
    const page = searchParams?.get("page") ?? "1"
    const query = useBuildQuery();
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
        return <SkeletonGalleryView />
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

export default GalleryView;
