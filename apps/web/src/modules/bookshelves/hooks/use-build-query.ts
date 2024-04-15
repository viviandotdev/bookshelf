import { useSearchParams } from 'next/navigation';
import { useState, useEffect } from 'react';
import { BOOKS_PAGE_SIZE } from '@/lib/constants';
import { buildSortQuery } from '@/lib/utils';

const useBuildQuery = () => {
  const searchParams = useSearchParams();
  const [query, setQuery] = useState({});

  // Parse search parameters
  const parseSearchParams = () => {
    return {
      page: searchParams?.get('page') ?? '1',
      status: searchParams?.get('status') ?? 'Any Status',
      sort: searchParams?.get('sort') ?? 'createdAt.desc',
      shelf: searchParams?.get('shelf') ?? 'All Books',
      owned: searchParams?.get('owned') ?? '',
      favorites: searchParams?.get('favorites') ?? '',
    };
  };

  // Build query based on shelf parameter
  const buildQueryByShelf = (
    shelfParam: string,
    owned: string,
    favorites: string
  ) => {
    if (shelfParam === 'Unshelved') {
      return {
        shelves: {
          none: {}, // Checks if the shelves array is empty
        },
      };
    } else if (shelfParam === 'All Books') {
      let someQueryCondition = [];
      let everyQueryCondition = [];
      if (owned == 'true') {
        someQueryCondition.push({ name: { equals: 'Owned' } });
      } else if (owned == 'false') {
        everyQueryCondition.push({
          name: { equals: 'Owned' },
        });
      }

      if (favorites == 'true') {
        someQueryCondition.push({ name: { equals: 'Favorites' } });
      } else if (favorites == 'false') {
        everyQueryCondition.push({
          name: { equals: 'Favorites' },
        });
      }
      if (someQueryCondition.length == 0 && everyQueryCondition.length == 0) {
        return {};
      } else {
        return {
          AND: [
            someQueryCondition.length > 0
              ? {
                  AND: someQueryCondition.map((query) => ({
                    shelves: {
                      some: {
                        shelf: {
                          is: query,
                        },
                      },
                    },
                  })),
                }
              : {},
            everyQueryCondition.length > 0
              ? {
                  NOT: everyQueryCondition.map((query) => ({
                    shelves: {
                      some: {
                        shelf: {
                          is: query,
                        },
                      },
                    },
                  })),
                }
              : {},
          ],
        };
      }
    } else {
      let someQueryCondition = [{ name: { equals: shelfParam } }];
      let everyQueryCondition = [];
      if (owned == 'true') {
        someQueryCondition.push({ name: { equals: 'Owned' } });
      } else if (owned == 'false') {
        everyQueryCondition.push({
          name: { equals: 'Owned' },
        });
      }

      if (favorites == 'true') {
        someQueryCondition.push({ name: { equals: 'Favorites' } });
      } else if (favorites == 'false') {
        everyQueryCondition.push({
          name: { equals: 'Favorites' },
        });
      }
      if (someQueryCondition.length == 0 && everyQueryCondition.length == 0) {
        return {};
      } else {
        return {
          AND: [
            someQueryCondition.length > 0
              ? {
                  AND: someQueryCondition.map((query) => ({
                    shelves: {
                      some: {
                        shelf: {
                          is: query,
                        },
                      },
                    },
                  })),
                }
              : {},
            everyQueryCondition.length > 0
              ? {
                  NOT: everyQueryCondition.map((query) => ({
                    shelves: {
                      some: {
                        shelf: {
                          is: query,
                        },
                      },
                    },
                  })),
                }
              : {},
          ],
        };
      }
    }
  };

  useEffect(() => {
    const { page, status, sort, shelf, owned, favorites } = parseSearchParams();
    const pageAsNumber = Number(page) - 1;
    const fallbackPage =
      isNaN(pageAsNumber) || pageAsNumber < 0 ? 0 : pageAsNumber;
    const offset = Math.ceil(Number(fallbackPage) * BOOKS_PAGE_SIZE);

    // Common query parameters
    const commonQuery = {
      offset: offset,
      limit: BOOKS_PAGE_SIZE,
    };

    const sortQuery = buildSortQuery(sort);

    // Build query based on shelf parameter
    const shelfQuery = buildQueryByShelf(shelf, owned, favorites);

    // Build query based on status parameter
    const statusQuery =
      status === 'Any Status' ? {} : { status: { equals: status } };

    // Merge the shelf and status queries
    const finalQuery = {
      ...commonQuery,
      ...sortQuery,
      where: {
        ...shelfQuery,
        ...statusQuery,
      },
    };
    console.log(finalQuery);
    setQuery(finalQuery);
  }, [searchParams]);

  return query;
};

export default useBuildQuery;
