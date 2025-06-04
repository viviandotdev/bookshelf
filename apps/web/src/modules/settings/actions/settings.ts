'use server';

import * as z from 'zod';
import { getCurrentUser } from '@/lib/auth';
import { SettingsSchema } from '@/schemas/auth';
import { setAuthToken, httpLink } from '@/lib/apollo';
import { UpdateUserDocument, UpdateUserMutation } from '@/graphql/graphql';
import { getClient } from '@/lib/apollo-client';
import { unstable_update } from '@/auth';

export const settings = async (values: z.infer<typeof SettingsSchema>) => {
    const sessionUser = await getCurrentUser();
    const client = getClient();
    client.setLink(setAuthToken(sessionUser?.accessToken as string).concat(httpLink));
    if (!sessionUser?.accessToken) {
        return { error: 'Unauthorized' };
    }

    const validatedFields = SettingsSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: 'Invalid fields!' };
    }

    try {
        const { data } = await client.mutate<UpdateUserMutation>({
            mutation: UpdateUserDocument,
            variables: {
                data: {
                    ...values,
                },
            },
        });
        // update the session
        await unstable_update({
            user: {
                ...sessionUser,
                username: data?.updateUser.username as string,
                email: data?.updateUser.email as string,
                name: data?.updateUser.name as string,
            }
        })
        return { success: 'Settings Updated!' };
    } catch (error) {
        return { error: 'Failed to update settings' };
    }


};
