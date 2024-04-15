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
    isOwned: string,
    isFavorites: string
  ) => {
    // Helper function to create query conditions
    const createCondition = (isOwnedOrFavorites: string, value: string) => {
      return isOwnedOrFavorites === 'true' //Filter is owned/favorites
        ? { shelves: { some: { shelf: { is: { name: { equals: value } } } } } }
        : isOwnedOrFavorites === 'false' //Filter not owned/favorites
          ? {
              shelves: { none: { shelf: { is: { name: { equals: value } } } } },
            }
          : null;
    };

    let conditions = [];
    // Add shelf-specific condition if not 'All Books' or 'Unshelved'
    if (shelfParam !== 'All Books' && shelfParam !== 'Unshelved') {
      conditions.push({
        shelves: { some: { shelf: { is: { name: { equals: shelfParam } } } } },
      });
    }

    // Special case for 'Unshelved' (no shelves)
    if (shelfParam === 'Unshelved') {
      conditions.push({ shelves: { none: {} } });
    }

    // Add condition for 'Owned'
    const ownedCondition = createCondition(isOwned, 'Owned');
    if (ownedCondition) conditions.push(ownedCondition);

    // Add condition for 'Favorites'
    const favoritesCondition = createCondition(isFavorites, 'Favorites');
    if (favoritesCondition) conditions.push(favoritesCondition);

    // Return the query object or an empty object if no conditions
    return conditions.length ? { AND: conditions } : {};
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
