import { ShelvesQuery, ShelvesDocument } from "@/graphql/graphql";
import { getApolloClient, setAuthToken, httpLink } from "@/lib/apollo";
import { NavItem } from "@/types";
import { getCurrentUser } from "@/lib/auth/session";

export async function getShelves() {
  const user = await getCurrentUser();
  const client = getApolloClient();
  client.setLink(setAuthToken(user.accessToken).concat(httpLink));

  const { data } = await client.query<ShelvesQuery>({
    query: ShelvesDocument,
  });

  const shelfSelections: NavItem[] =
    data?.shelves.map((shelf) => ({
      id: shelf.id,
      title: shelf.name,
      icon: "shelf", // Assuming "shelf" is the icon name for shelves
    })) || [];

  return shelfSelections;
}
