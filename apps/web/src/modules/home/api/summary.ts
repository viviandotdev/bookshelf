'use server';

import { CountUserBooksDocument, CountUserBooksQuery, Reading_Status } from '@/graphql/graphql';
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
          equals: Reading_Status.WantToRead,
        },
      },
    },
  });

  const { data: currentlyReading } = await client.query<CountUserBooksQuery>({
    query: CountUserBooksDocument,
    variables: {
      where: {
        status: {
          equals: Reading_Status.WantToRead,
        },
      },
    },
  });

  const { data: read } = await client.query<CountUserBooksQuery>({
    query: CountUserBooksDocument,
    variables: {
      where: {
        status: {
          equals: Reading_Status.WantToRead,
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
