import {
  ShelvesQuery,
  ShelvesDocument,
  CountUserBooksQuery,
  CountUserBooksDocument,
} from "../../../../graphql/graphql";
import { getApolloClient, setAuthToken, httpLink } from "@/lib/apollo";
import { getCurrentUser } from "@/lib/auth/session";

export async function getShelves() {
  const user = await getCurrentUser();
  const client = getApolloClient();
  client.setLink(setAuthToken(user.accessToken).concat(httpLink));

  const { data: shelvesData } = await client.query<ShelvesQuery>({
    query: ShelvesDocument,
  });

  const { data: AllBooks } = await client.query<CountUserBooksQuery>({
    query: CountUserBooksDocument,
  });

  const { data: UnShelvedBooks } = await client.query<CountUserBooksQuery>({
    query: CountUserBooksDocument,
    variables: {
      where: {
        shelves: {
          none: {}, // Checks if the shelves array is empty
        },
      },
    },
  });

  return {
    shelves: shelvesData.shelves ? shelvesData.shelves : [],
    library: [
      {
        id: "All",
        name: "All Books",
        _count: { userBooks: AllBooks.countUserBooks },
      },
      {
        id: "Unshelved",
        name: "Unshelved",
        _count: { userBooks: UnShelvedBooks.countUserBooks },
      },
    ],
  };
}
