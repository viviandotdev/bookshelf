import { useAppSelector } from "@/stores";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import * as R from "ramda";
import { BOOKS_PAGE_SIZE } from "@/lib/constants";

const useUserBookQuery = () => {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState({});

  // Parse search parameters
  const parseSearchParams = () => {
    return {
      page: searchParams?.get("page") ?? "1",
      status: searchParams?.get("status") ?? "Any Status",
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

  useEffect(() => {
    const { page, status, sort, shelf } = parseSearchParams();

    const sortBy = R.split(".", sort)[0];
    const sortOrder = R.split(".", sort)[1];
    const pageAsNumber = Number(page) - 1;
    const fallbackPage =
      isNaN(pageAsNumber) || pageAsNumber < 0 ? 0 : pageAsNumber;
    const offset = Math.ceil(Number(fallbackPage) * BOOKS_PAGE_SIZE);

    // Common query parameters
    const commonQuery = {
      offset: offset,
      orderBy: {
        [sortBy]: sortOrder === "asc" ? "desc" : "asc",
      },
    };

    // Build query based on shelf parameter
    const shelfQuery = buildQueryByShelf(shelf);

    // Build query based on status parameter
    const statusQuery =
      status === "Any Status" ? {} : { status: { equals: status } };

    // Merge the shelf and status queries
    const finalQuery = {
      ...commonQuery,
      where: {
        ...shelfQuery,
        ...statusQuery,
      },
    };

    setQuery(finalQuery);
  }, [searchParams]);

  return query;
};

export default useUserBookQuery;
