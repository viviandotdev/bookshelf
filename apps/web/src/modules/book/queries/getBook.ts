import { BookDocument, BookQuery } from '@/graphql/graphql';
import { getApolloClient, setAuthToken, httpLink } from '@/lib/apollo';
import { getCurrentUser } from '@/lib/auth';

export async function getBook(bookId: string) {
  const user = await getCurrentUser();
  const client = getApolloClient();
  client.setLink(setAuthToken(user.accessToken).concat(httpLink));
  const { data } = await client.query<BookQuery>({
    query: BookDocument,
    variables: {
      where: {
        id: bookId,
      },
    },
  });
  if (data.book) {
    return data.book;
  } else {
    return null;
  }
}
