"use client";

import * as React from "react";
import ReactPaginate from "react-paginate";
import { Icons } from "./icons";
import { BOOKS_PAGE_SIZE } from "@/lib/constants";
import { usePathname, useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/stores";
import { setCurrentPage } from "@/stores/shelf-slice";
import useCreateQueryString from "@/modules/bookshelves/hooks/use-create-query-string";
import { ApolloQueryResult } from "@apollo/client";
import { UserBooksQuery } from "@/graphql/graphql";
interface PaginationProps {
    totalPages: number;
    fetchMore: any;
}

export function Pagination({ totalPages, fetchMore }: PaginationProps) {
    const selected = useAppSelector((state) => state.shelf.currentPage);
    const createQueryString = useCreateQueryString();
    const dispatch = useAppDispatch();
    const router = useRouter();
    const pathname = usePathname();
    // rereender this compoennet
    const handlePageClick = (data: { selected: any; }) => {
        let selected = data.selected;
        dispatch(setCurrentPage(selected))

        router.push(
            `${pathname}?${createQueryString({
                page: selected + 1,
            })}`,
        )

        let offset = Math.ceil(selected * BOOKS_PAGE_SIZE);
        fetchMore({
            variables: {
                offset: offset
            }, updateQuery: (prev: UserBooksQuery, { fetchMoreResult }: { fetchMoreResult: UserBooksQuery }) => {
                return fetchMoreResult ? fetchMoreResult : prev;
            }
        })
    };

    const showNextButton = true
    const showPrevButton = true
    return (
        <ReactPaginate
            breakLabel={<span classNames="mr-2">...</span>}
            nextLabel={
                showNextButton ? (
                    <span className="bg-secondary text-primary w-10 h-10 flex items-center justify-center rounded-md">
                        <Icons.chevronRight />
                    </span>
                ) : null
            }
            pageCount={totalPages}
            onPageChange={handlePageClick}
            previousLabel={
                showPrevButton ? (
                    <span className="text-primary bg-secondary w-10 h-10 flex items-center justify-center rounded-md mr-4">
                        <Icons.chevronLeft />
                    </span>
                ) : null
            }
            forcePage={selected}
            containerClassName="flex items-center justify-center mt-8 mb-4"
            pageClassName="cursor-pointer block border- border-solid hover:bg-secondary w-10 h-10 flex items-center justify-center rounded-md mr-4"
            activeClassName="text-primary text-sm"
        />
    );
}
