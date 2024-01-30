import {
  UserBook,
  UserBookWhereInput,
  UserBooksDocument,
  UserBooksQuery,
} from "@/graphql/graphql";
import { getApolloClient, setAuthToken, httpLink } from "@/lib/apollo";
import { getCurrentUser } from "@/lib/auth";

export async function getUserBooks(where: UserBookWhereInput) {
  const user = await getCurrentUser();
  const client = getApolloClient();
  client.setLink(setAuthToken(user.accessToken).concat(httpLink));

  const { data } = await client.query<UserBooksQuery>({
    query: UserBooksDocument,
    variables: {
      where,
    },
  });

  return data.userBooks ? (data.userBooks as UserBook[]) : [];
}
