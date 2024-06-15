import { librarySelects } from '@/config/books';
import {
  Shelf,
  ShelvesWithBookCoversDocument,
  ShelvesWithBookCoversQuery,
} from '@/graphql/graphql';
import { getApolloClient, setAuthToken, httpLink } from '@/lib/apollo';
import { getCurrentUser } from '@/lib/auth';

export async function getShelvesWithBookCovers(): Promise<{
  shelves: Shelf[];
}> {
  const user = await getCurrentUser();
  const client = getApolloClient();
  client.setLink(setAuthToken(user.accessToken).concat(httpLink));

  const { data: shelvesData } = await client.query<ShelvesWithBookCoversQuery>({
    query: ShelvesWithBookCoversDocument,
  });
  return {
    shelves: shelvesData.shelves ? shelvesData.shelves : [],
  };
}
