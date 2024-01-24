import {
  User,
  UserDocument,
  UserQuery,
  UserWhereUniqueInput,
} from "@/graphql/graphql";
import { getApolloClient, setAuthToken, httpLink } from "@/lib/apollo";
import { getCurrentUser } from "@/lib/auth";

export async function getUser(where: UserWhereUniqueInput) {
  const user = await getCurrentUser();
  const client = getApolloClient();
  client.setLink(setAuthToken(user.accessToken).concat(httpLink));

  const { data } = await client.query<UserQuery>({
    query: UserDocument,
    variables: {
      where: {
        username: where.username,
      },
    },
  });

  return data.user ? (data.user as User) : null;
}
