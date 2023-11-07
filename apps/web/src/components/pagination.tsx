"use client";

import * as React from "react";
import ReactPaginate from "react-paginate";
import { Icons } from "./icons";
import { BOOKS_PAGE_SIZE } from "@/lib/constants";
import { useSearchParams } from "next/navigation";
import { useRouter } from "next/navigation";
import { useAppSelector } from "@/stores";
import { useEffect } from "react";
interface PaginationProps {
    handlePageClick: (data: { selected: any; }) => void;
    totalPages: number;
}

export function Pagination({ totalPages, handlePageClick }: PaginationProps) {
    const selected = useAppSelector((state) => state.shelf.currentPage);
    // rereender this compoennet

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
