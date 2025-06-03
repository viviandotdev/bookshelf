'use server';

import * as z from 'zod';

import { getCurrentUser } from '@/lib/auth';
import { SettingsSchema } from '@/schemas/auth';
import { unstable_update } from '@/auth';
import { setAuthToken, httpLink } from '@/lib/apollo';
import { UpdateUserDocument, UpdateUserMutation } from '@/graphql/graphql';
import { getClient } from '@/lib/apollo-client';

export const settings = async (values: z.infer<typeof SettingsSchema>) => {
    const user = await getCurrentUser();
    const client = getClient();
    client.setLink(setAuthToken(user?.accessToken as string).concat(httpLink));
    if (!user?.accessToken) {
        return { error: 'Unauthorized' };
    }

    const { data, errors } = await client.mutate<UpdateUserMutation>({
        mutation: UpdateUserDocument,
        variables: {
            data: {
                ...values,
            },
        },
    });

    if (values.email && values.email !== data?.updateUser.email) {
        return { success: 'Check your email for a verification link!' };
    }


    // update({
    //     user: {
    //         username: data?.updateUser.username,
    //         email: data?.updateUser.email,
    //     },
    // });

    return { success: 'Settings Updated!' };
};
