'use server';

import * as z from 'zod';

import { getCurrentUser } from '@/lib/auth';
import { changePasswordSchema } from '@/schemas/auth';
import { setAuthToken, httpLink, getApolloClient } from '@/lib/apollo';
import { UpdateUserDocument, UpdateUserMutation } from '@/graphql/graphql';

export const changePassword = async (
  values: z.infer<typeof changePasswordSchema>
) => {
  const user = await getCurrentUser();
  const client = getApolloClient();
  client.setLink(setAuthToken(user.accessToken as string).concat(httpLink));

  if (!user) {
    return { error: 'Unauthorized' };
  }

  if (user.isOAuth) {
    values.password = undefined;
    values.newPassword = undefined;
  }
  try {
    const { errors } = await client.mutate<UpdateUserMutation>({
      mutation: UpdateUserDocument,
      variables: {
        data: {
          password: values.password,
          newPassword: values.newPassword,
        },
      },
      errorPolicy: 'all',
    });
    if (errors) {
      return { error: errors?.map((e) => e.message)[0] };
    }
  } catch (error) {
    return { error: 'There was a problem with your request' };
  }

  return { success: 'Password Updated!' };
};
