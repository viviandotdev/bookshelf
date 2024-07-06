import SeachTemplate from '@/modules/search/templates';
import { RESULTS_PAGE_SIZE } from '@/lib/constants';
import { searchBooks } from '@/modules/search/api/searchBooks';
interface SearchPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const { q, page, field } = searchParams;
  const searchQuery = q as string;
  const pageAsNumber = Number(page) - 1;
  const fallbackPage =
    isNaN(pageAsNumber) || pageAsNumber < 0 ? 0 : pageAsNumber;
  const offset = Math.ceil(Number(fallbackPage) * RESULTS_PAGE_SIZE);

  const { hits, count } = await searchBooks(
    searchQuery,
    field as string,
    offset
  );


  //   const hits = sampleBookData;
  return (
    <SeachTemplate
      hits={hits}
      count={90}
      query={{
        q: searchQuery,
        page: page,
        field: field,
      }}
    />
  );
}
