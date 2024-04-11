'use server';

import { CountUserBooksDocument, CountUserBooksQuery } from '@/graphql/graphql';
import { getApolloClient, httpLink } from '@/lib/apollo';
import { getCurrentUser } from '@/lib/auth';

export async function summary() {
  const user = await getCurrentUser();
  const client = getApolloClient();
  client.setLink(httpLink);

  const { data: wantToRead } = await client.query<CountUserBooksQuery>({
    query: CountUserBooksDocument,
    variables: {
      where: {},
    },
  });

  const { data } = await client.query<CountUserBooksQuery>({
    query: CountUserBooksDocument,
    variables: {
      where: {},
    },
  });

  return data.countUserBooks || 0;
}
