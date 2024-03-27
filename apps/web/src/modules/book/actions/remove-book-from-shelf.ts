'use server';
import {
  RemoveUserBookFromShelfDocument,
  RemoveUserBookFromShelfMutation,
} from '@/graphql/graphql'; // Update the import to match your actual GraphQL document and mutation
import { getApolloClient, setAuthToken, httpLink } from '@/lib/apollo';
import { getCurrentUser } from '@/lib/auth';

export async function removeBookFromShelf(bookId: string, shelf: string) {
  const user = await getCurrentUser();
  const client = getApolloClient();
  client.setLink(setAuthToken(user.accessToken).concat(httpLink));

  const { data } = await client.mutate<RemoveUserBookFromShelfMutation>({
    mutation: RemoveUserBookFromShelfDocument,
    variables: {
      bookId: parseInt(bookId),
      shelf: shelf,
    },
  });

  if (data?.removeBookFromShelf) {
    return data.removeBookFromShelf;
  } else {
    return null;
  }
}
