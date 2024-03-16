'use server';
import {
  Action,
  GetAuditLogsDocument,
  GetAuditLogsQuery,
  UserBookWhereInput,
} from '@/graphql/graphql';
import { getApolloClient, setAuthToken, httpLink } from '@/lib/apollo';
import { getCurrentUser } from '@/lib/auth';

export async function getActivity(
  where: UserBookWhereInput,
  offset: number,
  limit: number,
  action?: Action,
  sortQuery?: any
) {
  const user = await getCurrentUser();
  const client = getApolloClient();
  client.setLink(setAuthToken(user.accessToken).concat(httpLink));

  const { data } = await client.query<GetAuditLogsQuery>({
    query: GetAuditLogsDocument,
    variables: {
      ...sortQuery,
      where: {
        ...where,
      },
      action,
      offset,
      limit,
    },
  });

  return data.auditLogs;
}
