import SeachTemplate from '@/modules/search/templates';
import { RESULTS_PAGE_SIZE } from '@/lib/constants';
import { searchBooks } from '@/modules/search/api/searchBooks';
import { getApolloClient, httpLink, setAuthToken } from '@/lib/apollo';
import {
  SearchMyLibraryDocument,
  SearchMyLibraryQuery,
} from '@/graphql/graphql';
import { getCurrentUser } from '@/lib/auth';
import { BookData } from '@/modules/bookshelves/types';
interface SearchPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined;
  };
}

export default async function SearchPage({ searchParams }: SearchPageProps) {
  const user = await getCurrentUser();
  const { q, page, field } = searchParams;
  const searchQuery = q as string;
  const pageAsNumber = Number(page) - 1;
  const client = getApolloClient();
  client.setLink(setAuthToken(user.accessToken as string).concat(httpLink));
  let libraryHits;
  try {
    const { data, errors } = await client.mutate<SearchMyLibraryQuery>({
      mutation: SearchMyLibraryDocument,
      variables: {
        query: q as string,
        offset: 0,
        limit: 100,
      },
    });
    libraryHits = data?.searchMyLibrary;
  } catch (error) {
    return <div>Error loading books</div>;
  }

  const fallbackPage =
    isNaN(pageAsNumber) || pageAsNumber < 0 ? 0 : pageAsNumber;
  const offset = Math.ceil(Number(fallbackPage) * RESULTS_PAGE_SIZE);

  const { hits, count } = await searchBooks(
    searchQuery,
    field as string,
    offset
  );

  return (
    <SeachTemplate
      libraryHits={libraryHits as BookData[]}
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
