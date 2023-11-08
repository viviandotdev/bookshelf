import {
  UserBook,
  UserBooksDocument,
  UserBooksQuery,
} from "../../../../graphql/graphql";
import { getApolloClient, setAuthToken, httpLink } from "@/lib/apollo";
import { getCurrentUser } from "@/lib/auth/session";

export async function getUserBooks() {
  const user = await getCurrentUser();
  const client = getApolloClient();
  client.setLink(setAuthToken(user.accessToken).concat(httpLink));

  const { data: currentlyReading } = await client.query<UserBooksQuery>({
    query: UserBooksDocument,
    variables: {
      where: {
        status: "Currently Reading",
      },
    },
  });

  return currentlyReading.userBooks
    ? (currentlyReading.userBooks as UserBook[])
    : [];
}
