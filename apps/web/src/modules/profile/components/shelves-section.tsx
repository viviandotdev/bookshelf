"use client"
import { buttonVariants } from '@/components/ui/button';
import { Shelf } from '@/graphql/graphql';
import { cn } from '@/lib/utils';
import useCreateQueryString from '@/modules/bookshelves/hooks/use-create-query-string';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react'

interface ShelvesSectionProps {
    shelves: Shelf[];
}

export const ShelvesSection: React.FC<ShelvesSectionProps> = ({ shelves }) => {
    const createQueryString = useCreateQueryString();
    const pathname = usePathname()
    return (
        <>
            {
                shelves.map((shelf, index) => {
                    return (
                        <Link
                            key={index}
                            className={cn(
                                buttonVariants({ variant: "pill", size: "xs" }),
                                "mr-1 mb-1 rounded-md bg-beige-200 text-xs text-beige-700 font-normal"
                            )}
                            href={`${pathname}/books?${createQueryString({
                                shelf: shelf.name,
                                page: 1,
                                status: "Any Status",
                            })}`}
                        >
                            {shelf.name}
                        </Link>
                    );
                })
            }
        </>
    );
}
export default ShelvesSection
