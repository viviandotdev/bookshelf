'use server';

import * as z from 'zod';

import { getCurrentUser } from '@/lib/auth';
import { changePasswordSchema } from '@/schemas/auth';
import { setAuthToken, httpLink, getClient } from '@/lib/apollo';
import { UpdatePasswordDocument, UpdatePasswordMutation } from '@/graphql/graphql';

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
    } catch (error: any) {
        if (error.graphQLErrors) {
            return { error: error.graphQLErrors[0].message }
        }
        return { error: 'Failed to update passowrd' };
    }
};
