'use server';

import { BestsellersDocument, BestsellersQuery } from '@/graphql/graphql';
import { getApolloClient, httpLink } from '@/lib/apollo';
import { getCurrentUser } from '@/lib/auth';

export async function bestsellers(list: string) {
  const user = await getCurrentUser();
  const client = getApolloClient();
  client.setLink(httpLink);

  const { data } = await client.query<BestsellersQuery>({
    query: BestsellersDocument,
    variables: {
      list,
    },
  });

  return data.bestsellers || [];
}
