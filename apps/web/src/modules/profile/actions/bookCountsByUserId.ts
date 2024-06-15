import { BookCountsByUserIdDocument } from '@/graphql/graphql';
import { getApolloClient } from '@/lib/apollo';
import { z } from 'zod';

export const bookCountsByUserId = async (userId: string) => {
  const client = getApolloClient();
  const { data } = await client.query({
    query: BookCountsByUserIdDocument,
    variables: { userId },
  });

  return data.bookCountsByUserId;
};
