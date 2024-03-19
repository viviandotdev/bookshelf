import { GetGoogleBookDocument, GetGoogleBookQuery } from '@/graphql/graphql';
import { getApolloClient, setAuthToken, httpLink } from '@/lib/apollo';
import { getCurrentUser } from '@/lib/auth';

export async function getGoogleBook(bookId: string) {
  const user = await getCurrentUser();
  const client = getApolloClient();
  client.setLink(setAuthToken(user.accessToken).concat(httpLink));
  const { data } = await client.query<GetGoogleBookQuery>({
    query: GetGoogleBookDocument,
    variables: {
      id: bookId,
    },
  });
  if (data.getGoogleBook) {
    return data.getGoogleBook;
  } else {
    return null;
  }
}
