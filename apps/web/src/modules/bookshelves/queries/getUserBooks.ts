'use server';
import {
  GetUserBooksDocument,
  GetUserBooksQuery,
  UserBook,
  UserBookWhereInput,
} from '@/graphql/graphql';
import { getApolloClient, setAuthToken, httpLink } from '@/lib/apollo';
import { getCurrentUser } from '@/lib/auth';

export async function getUserBooks(where: UserBookWhereInput) {
  const user = await getCurrentUser();
  const client = getApolloClient();
  client.setLink(setAuthToken(user.accessToken).concat(httpLink));

  const { data } = await client.query<GetUserBooksQuery>({
    query: GetUserBooksDocument,
    variables: {
      where,
    },
  });

  return data.getUserBooks.userBooks
    ? (data.getUserBooks.userBooks as UserBook[])
    : [];
}
