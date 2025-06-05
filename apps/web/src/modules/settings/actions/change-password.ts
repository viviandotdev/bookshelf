'use server';

import * as z from 'zod';

import { getCurrentUser } from '@/lib/auth';
import { changePasswordSchema } from '@/schemas/auth';
import { setAuthToken, httpLink, getApolloClient } from '@/lib/apollo';
import { UpdatePasswordDocument, UpdatePasswordMutation, UpdateUserDocument, UpdateUserMutation } from '@/graphql/graphql';
import { getClient } from '@/lib/apollo-client';
import { unstable_update } from '@/auth';

export const changePassword = async (
    values: z.infer<typeof changePasswordSchema>
) => {
    const sessionUser = await getCurrentUser();
    const client = getClient();
    client.setLink(setAuthToken(sessionUser?.accessToken as string).concat(httpLink));

    if (!sessionUser) {
        return { error: 'Unauthorized' };
    }
    try {
        await client.mutate<UpdatePasswordMutation>({
            mutation: UpdatePasswordDocument,
            variables: {
                data: {
                    password: values.password,
                    newPassword: values.newPassword,
                },
            },
        });

        return { success: 'Password updated!' };
    } catch (error) {
        return { error: 'Failed to update passowrd' };
    }
};
