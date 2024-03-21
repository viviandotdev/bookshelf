'use server';
import {
  AddUserBookToShelfDocument,
  AddUserBookToShelfMutation,
} from '@/graphql/graphql'; // Update the import to match your actual GraphQL document and mutation
import { getApolloClient, setAuthToken, httpLink } from '@/lib/apollo';
import { getCurrentUser } from '@/lib/auth';

export async function addBookToShelf(bookId: string, shelf: string) {
  const user = await getCurrentUser();
  const client = getApolloClient();
  client.setLink(setAuthToken(user.accessToken).concat(httpLink));

  const { data } = await client.mutate<AddUserBookToShelfMutation>({
    mutation: AddUserBookToShelfDocument,
    variables: {
      bookId: parseInt(bookId),
      shelf: shelf,
    },
  });

  if (data?.addBookToShelf) {
    return data.addBookToShelf;
  } else {
    return null;
  }
}
