import { UserBookDocument, UserBookQuery } from "@/graphql/graphql";
import { getApolloClient, setAuthToken, httpLink } from "@/lib/apollo";
import { getCurrentUser } from "@/lib/auth/session";

export async function getUserBook(bookId: string) {
  const user = await getCurrentUser();
  const client = getApolloClient();
  client.setLink(setAuthToken(user.accessToken).concat(httpLink));
  const { data } = await client.query<UserBookQuery>({
    query: UserBookDocument,
    variables: {
      where: {
        id: bookId,
      },
    },
  });
  if (data.userBook) {
    return data.userBook;
  } else {
    return null;
  }
}
