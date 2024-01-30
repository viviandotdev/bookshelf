"use client";

import * as React from "react";
import ReactPaginate from "react-paginate";
import { Icons } from "./icons";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import useCreateQueryString from "@/modules/bookshelves/hooks/use-create-query-string";
interface PaginationProps {
    page: string;
    totalPages: number;
}

export function Pagination({ page, totalPages }: PaginationProps) {
    const createQueryString = useCreateQueryString();
    const router = useRouter();
    const [isPending, startTransition] = React.useTransition()
    const pathname = usePathname();
    // Rereender this compoennet
    const handlePageClick = (data: { selected: any; }) => {
        startTransition(() => {
            router.push(
                `${pathname}?${createQueryString({
                    page: data.selected + 1,
                })}`,
            )
        })
    };

    const showNextButton = true
    const showPrevButton = true
    return (
        <ReactPaginate
            breakLabel={<span className="mr-2">...</span>}
            nextLabel={
                showNextButton ? (
                    <span className="bg-beige-100 text-beige w-10 h-10 flex items-center justify-center rounded-md">
                        <Icons.chevronRight />
                    </span>
                ) : null
            }
            pageCount={totalPages}
            onPageChange={handlePageClick}
            previousLabel={
                showPrevButton ? (
                    <span className="text-beige bg-beige-100 w-10 h-10 flex items-center justify-center rounded-md mr-4">
                        <Icons.chevronLeft />
                    </span>
                ) : null
            }
            forcePage={Number(page) - 1}
            containerClassName="flex items-center justify-center mt-8 mb-4"
            pageClassName="cursor-pointer block border- border-solid hover:bg-beige-100 w-10 h-10 flex items-center justify-center rounded-md mr-4"
            activeClassName="text-beige text-sm"
        />
    );
}
