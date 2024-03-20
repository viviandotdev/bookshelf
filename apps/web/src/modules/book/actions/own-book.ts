'use server';
import { LikeUserBookDocument, LikeUserBookMutation } from '@/graphql/graphql';
import { getApolloClient, setAuthToken, httpLink } from '@/lib/apollo';
import { getCurrentUser } from '@/lib/auth';

export async function likeUserBook(bookId: string) {
  const user = await getCurrentUser();
  const client = getApolloClient();
  client.setLink(setAuthToken(user.accessToken).concat(httpLink));

  const { data } = await client.mutate<LikeUserBookMutation>({
    mutation: LikeUserBookDocument,
    variables: {
      bookId: parseInt(bookId),
    },
  });

  if (data?.likeUserBook) {
    return data.likeUserBook;
  } else {
    return null;
  }
}
