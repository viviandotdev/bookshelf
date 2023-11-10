"use client";
import React, { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useAppDispatch, useAppSelector } from "@/stores";
import { setCurrentPage } from "@/stores/shelf-slice";
import SideBar from "@/modules/bookshelves/components/shelf-sidebar";
import BookList from "@/modules/bookshelves/components/book-list";
import useBookFilters from "@/modules/bookshelves/hooks/useBookFilters";
import {
    ContentNav,
} from "@/modules/layout/components/content-nav";
import { CreateShelfModal } from "@/modules/bookshelves/components/create-shelf-modal";
import {
    bookStatuses
} from "@/config/books";
import { Pagination } from "@/components/pagination";
import { StatusMenu } from "@/modules/bookshelves/components/status-menu";
import { ShelfMenu } from "@/modules/bookshelves/components/shelf-menu";
import { Shelf, useCountUserBooksLazyQuery, useUserBooksLazyQuery } from "@/graphql/graphql";
import { BOOKS_PAGE_SIZE } from "@/lib/constants";
import { NetworkStatus } from "@apollo/client";
import { toast } from "@/hooks/use-toast";
import * as R from "ramda";
import qs from "query-string";
import useCreateQueryString from "../hooks/use-create-query-string";

interface BookshelvesTemplateProps {
    librarySelections: Shelf[];
    shelfSelections: Shelf[];
}

export default function BookshelvesTemplate({ librarySelections,
    shelfSelections }: BookshelvesTemplateProps) {

    const { queryFilter, setQueryFilter } = useBookFilters();
    const [totalPages, setTotalPages] = useState(0);
    const { data: session, status } = useSession();
    const dispatch = useAppDispatch();
    const library = useAppSelector((state) => state.shelf.library);
    const params = useSearchParams();
    const currentQuery = qs.parse(params.toString());
    const currentShelf = currentQuery.shelf ? currentQuery.shelf : "";
    const statuses = [
        {
            name: "Any Status",
        },
        ...bookStatuses

    ]
    const [selectedStatus, setSelectedStatus] = React.useState(
        statuses[0]
    )
    useEffect(() => {
        const currentQuery = qs.parse(params.toString());
        const currentPage = currentQuery.page ? parseInt(currentQuery.page as string) : 1;
        dispatch(setCurrentPage(currentPage - 1))
    }, [params])
    // on shelf change reset the fi
    useEffect(() => {
        setSelectedStatus(statuses[0])
    }, [currentShelf])

    const [getCount] = useCountUserBooksLazyQuery({
        onCompleted: (data) => {
            setTotalPages(data!.countUserBooks / BOOKS_PAGE_SIZE)
        }
    });

    const [loadBooks, { data: booksData, fetchMore, networkStatus }] =
        useUserBooksLazyQuery({
            fetchPolicy: "cache-and-network",
            nextFetchPolicy: "cache-first",
            notifyOnNetworkStatusChange: true,
            onError: (error) => {
                toast({
                    title: error.message,
                    variant: "destructive",
                });
            },
            onCompleted: (data) => {
                console.log("data", data.userBooks);
                if (data && data.userBooks && data.userBooks.length === 0) {
                    toast({
                        title: "No books are here... yet",
                        variant: "destructive",
                    });
                }
            },
            errorPolicy: "all",
        });

    const books = booksData && booksData?.userBooks;
    const loading = networkStatus === NetworkStatus.loading;
    const loadMoreLoading = networkStatus === NetworkStatus.fetchMore;

    useEffect(() => {
        const loadData = async () => {
            const pagedQueryFilter = R.mergeRight(queryFilter, {
                offset: 0,
                limit: BOOKS_PAGE_SIZE,
            });
            await loadBooks({ variables: { ...pagedQueryFilter } });
            await getCount({ variables: { ...queryFilter } });
        };

        loadData();
    }, [queryFilter, loadBooks, getCount, library]);

    if (status == "loading") {
        return (
            <>
                <div>Loading...</div>
            </>
        );
    }
    return (
        <>
            <CreateShelfModal />
            <div className="w-full grid grid-cols-4 gap-6">
                <SideBar
                    librarySelections={librarySelections}
                    shelfSelections={shelfSelections}
                />
                <div className="col-span-4 xl:col-span-3 pt-1.5">

                    <BookList books={books} selectedStatus={selectedStatus} setSelectedStatus={setSelectedStatus} setQueryFilter={setQueryFilter} />
                    <Pagination
                        fetchMore={fetchMore}
                        totalPages={totalPages}
                    />
                </div>
                <CreateShelfModal />
            </div ></>

    );
}
