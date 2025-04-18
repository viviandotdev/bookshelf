'use client';

import * as React from 'react';
import ReactPaginate from 'react-paginate';
import { Icons } from './icons';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/navigation';
import useCreateQueryString from '@/modules/bookshelves/hooks/use-create-query-string';
import { ChevronsLeft, ChevronsRight } from 'lucide-react';
import { Button } from './ui/button';

interface PaginationProps {
    page: string;
    totalPages: number;
}

export function Pagination({ page, totalPages }: PaginationProps) {
    const createQueryString = useCreateQueryString();
    const router = useRouter();
    const pathname = usePathname();
    const currentPage = Number(page);

    const handlePageClick = (pageNumber: number) => {
        router.push(
            `${pathname}?${createQueryString({
                page: pageNumber,
            })}`
        );
    };

    return (
        <div className="flex items-center justify-center gap-2 mt-8 mb-4">
            {/* First page */}
            <Button
                size="xs"
                onClick={() => handlePageClick(1)}
                disabled={currentPage === 1}
                className="h-8 w-8 text-black bg-white hover:bg-beige-100"
            >
                <ChevronsLeft className="h-4 w-4" />
            </Button>

            <ReactPaginate
                breakLabel={"..."}
                nextLabel={
                    <span className='flex h-8 w-8 items-center justify-center rounded'>
                        <Icons.chevronRight className="h-4 w-4" />
                    </span>
                }
                pageRangeDisplayed={5}
                marginPagesDisplayed={2}
                pageCount={totalPages}
                onPageChange={(data) => handlePageClick(data.selected + 1)}
                previousLabel={
                    <span className='flex h-8 w-8 items-center justify-center rounded'>
                        <Icons.chevronLeft className="h-4 w-4" />
                    </span>
                }
                forcePage={currentPage - 1}
                containerClassName='flex items-center justify-center gap-2'
                pageClassName='cursor-pointer block hover:bg-beige-100 w-8 h-8 flex items-center justify-center rounded'
                pageLinkClassName='w-full h-full flex items-center justify-center'
                activeClassName='!bg-beige-700 text-white hover:!bg-beige-700'
                previousClassName='cursor-pointer hover:bg-beige-100 rounded'
                nextClassName='cursor-pointer hover:bg-beige-100 rounded'
                disabledClassName='opacity-50 cursor-not-allowed hover:bg-transparent'
                renderOnZeroPageCount={null}
            />

            {/* Last page */}
            <Button
                size="xs"
                onClick={() => handlePageClick(totalPages)}
                disabled={currentPage === totalPages}
                className="h-8 w-8 text-black bg-white hover:bg-beige-100"
            >
                <ChevronsRight className="h-4 w-4" />
            </Button>
        </div>
    );
}
