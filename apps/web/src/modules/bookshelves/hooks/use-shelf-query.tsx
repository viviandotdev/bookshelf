import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import * as R from "ramda";
import { BOOKS_PAGE_SIZE } from "@/lib/constants";

const useShelfQuery = () => {
    const searchParams = useSearchParams();
    const [query, setQuery] = useState({});

    // Parse search parameters
    const parseSearchParams = () => {
        return {
            sort: searchParams?.get("sort") ?? "createdAt.desc",
            shelf: searchParams?.get("shelf") ?? "All Books",
        };
    };

    // Build query based on shelf parameter
    const buildQueryByShelf = (shelfParam: string) => {
        if (shelfParam === "Unshelved") {
            return {
                shelves: {
                    none: {}, // Checks if the shelves array is empty
                },
            };
        } else if (shelfParam === "All Books") {
            return {};
        } else {
            return {
                shelves: {
                    some: {
                        shelf: {
                            is: {
                                name: {
                                    equals: shelfParam,
                                },
                            },
                        },
                    },
                },
            };
        }
    };

    const buildSortQuery = (sortParam: string) => {
        const sortBy = R.split(".", sortParam)[0];
        const sortOrder = R.split(".", sortParam)[1];

        if (sortBy == "title" || sortBy == "author") {
            return {
                orderBy: {
                    book: {
                        [sortBy]: sortOrder,
                    },
                },
            };
        }
        return {
            orderBy: {
                [sortBy]: sortOrder,
            },
        };
    };

    useEffect(() => {
        const { sort, shelf } = parseSearchParams();

        const sortQuery = buildSortQuery(sort);

        // Build query based on shelf parameter
        const shelfQuery = buildQueryByShelf(shelf);

        // Merge the shelf and status queries
        const finalQuery = {
            ...sortQuery,
            where: {
                ...shelfQuery,
            },
        };

        setQuery(finalQuery);
    }, [searchParams]);

    return query;
};

export default useShelfQuery;
