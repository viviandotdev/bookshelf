import { SortOrder } from "@/graphql/graphql";
import { BOOKS_PAGE_SIZE } from "@/lib/constants";

export const generateQueryFilter = (query: any, status: string, offset = 0) => {
  const whereFilter = {
    ...query.where,
    status: { equals: status },
  };

  return {
    ...query,
    offset,
    limit: BOOKS_PAGE_SIZE,
    where: whereFilter,
    // the sort order 
    orderBy: { order: SortOrder.Asc },
  };
};

export function reorder<T>(list: T[], startIndex: number, endIndex: number) {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);
  return result;
}
