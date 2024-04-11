'use server';

import { CountUserBooksDocument, CountUserBooksQuery } from '@/graphql/graphql';
import { getApolloClient, httpLink, setAuthToken } from '@/lib/apollo';
import { getCurrentUser } from '@/lib/auth';

export async function summary() {
  const user = await getCurrentUser();
  const client = getApolloClient();
  client.setLink(setAuthToken(user.accessToken as string).concat(httpLink));

  const { data: wantToRead } = await client.query<CountUserBooksQuery>({
    query: CountUserBooksDocument,
    variables: {
      where: {
        status: {
          equals: 'Want to Read',
        },
      },
    },
  });

  const { data: currentlyReading } = await client.query<CountUserBooksQuery>({
    query: CountUserBooksDocument,
    variables: {
      where: {
        status: {
          equals: 'Want to Read',
        },
      },
    },
  });

  const { data: read } = await client.query<CountUserBooksQuery>({
    query: CountUserBooksDocument,
    variables: {
      where: {
        status: {
          equals: 'Want to Read',
        },
      },
    },
  });

  return {
    wantToRead: wantToRead.countUserBooks,
    currentlyReading: currentlyReading.countUserBooks,
    read: read.countUserBooks,
  };
}
