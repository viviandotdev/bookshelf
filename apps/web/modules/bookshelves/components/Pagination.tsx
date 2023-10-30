"use client";

import * as React from "react";
import ReactPaginate from "react-paginate";
import { Icons } from "../../../components/icons";
interface PaginationProps {
  totalPages: number;
}

export function Pagination({ totalPages }: PaginationProps) {
  const showNextButton = true;
  const showPrevButton = true;
  return (
    <ReactPaginate
      breakLabel={<span className="mr-2">...</span>}
      nextLabel={
        showNextButton ? (
          <span className="bg-secondary text-primary w-10 h-10 flex items-center justify-center rounded-md">
            <Icons.chevronRight />
          </span>
        ) : null
      }
      pageCount={5}
      previousLabel={
        showPrevButton ? (
          <span className="text-primary bg-secondary w-10 h-10 flex items-center justify-center rounded-md mr-4">
            <Icons.chevronLeft />
          </span>
        ) : null
      }
      containerClassName="flex items-center justify-center mt-8 mb-4"
      pageClassName="cursor-pointer block border- border-solid hover:bg-secondary w-10 h-10 flex items-center justify-center rounded-md mr-4"
      activeClassName="text-primary text-sm"
    />
  );
}
