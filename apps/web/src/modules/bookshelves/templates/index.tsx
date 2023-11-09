"use client";
import React, { useEffect, useState } from "react";
import { dm_sefif_display } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { Pagination } from "@/components/pagination";

import { Shelf, useCountUserBooksLazyQuery, useCountUserBooksQuery, useUserBooksLazyQuery } from "../../../../graphql/graphql";
import SideBar from "@/modules/bookshelves/components/shelf-sidebar";
import BookList from "@/modules/bookshelves/components/book-list";
import useBookFilters from "../hooks/useBookFilters";
import { ContentNav } from "@/modules/layout/components/content-nav";
import { CreateShelfModal } from "../components/create-shelf-modal";
import { BOOKS_PAGE_SIZE } from "@/lib/constants";
import { NetworkStatus } from "@apollo/client";
import { toast } from "@/hooks/use-toast";
import * as R from "ramda";
import { useRouter, useSearchParams } from "next/navigation";
import qs from "query-string";
import { useSession } from "next-auth/react";
import { useAppDispatch, useAppSelector } from "@/stores";
import { setCurrentPage } from "@/stores/shelf-slice";
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
    const router = useRouter();
    const library = useAppSelector((state) => state.shelf.library);
    const params = useSearchParams();

    useEffect(() => {
        const currentQuery = qs.parse(params.toString());
        const currentPage = currentQuery.page ? parseInt(currentQuery.page as string) : 1;
        dispatch(setCurrentPage(currentPage - 1))
    }, [])

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

    const handlePageClick = (data: { selected: any; }) => {
        let selected = data.selected;
        dispatch(setCurrentPage(selected))
        let currentQuery = {};
        if (params) {
            currentQuery = qs.parse(params.toString());
        }
        if (session) {
            const url = qs.stringifyUrl(
                {
                    url: `/${session!.user.name}/books`,
                    query: {
                        ...currentQuery,
                        page: selected + 1,
                    },
                },
                { skipNull: true }
            );
            router.push(url);
        }
        let offset = Math.ceil(selected * BOOKS_PAGE_SIZE);
        fetchMore({
            variables: {
                offset: offset
            }, updateQuery: (prev, { fetchMoreResult }) => {
                return fetchMoreResult ? fetchMoreResult : prev;
            }
        })
    };
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
                    <nav className="flex flex-col w-full rounded-lg  justify-between mt-8 pb-2">
                        <h1
                            className={cn(
                                dm_sefif_display.className,
                                "text-primary text-4xl mb-8"
                            )}
                        >
                            Bookshelves
                        </h1>
                        <ContentNav setQueryFilter={setQueryFilter} showSearch showSort />

                    </nav>
                    <div className="grid grid-cols-3 md:grid-cols-5 gap-4 justify-center overflow-hidden px-4 pt-2 pb-10">
                        <BookList books={books} />
                    </div>
                    <Pagination
                        handlePageClick={handlePageClick}
                        totalPages={totalPages}
                    // setCurrentPage={setCurrentPage}
                    />
                </div>
                <CreateShelfModal />
            </div></>

    );
}
