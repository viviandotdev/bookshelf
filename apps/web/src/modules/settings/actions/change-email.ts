'use server';

import * as z from 'zod';
import { getCurrentUser } from '@/lib/auth';
import { setAuthToken, httpLink } from '@/lib/apollo';
import { UpdateEmailDocument, UpdateEmailMutation } from '@/graphql/graphql';
import { changeEmailSchema } from '../components/modals/change-email';
import { getClient } from '@/lib/apollo-client';
import { unstable_update } from '@/auth';

export const changeEmail = async (
    values: z.infer<typeof changeEmailSchema>
) => {
    const sessionUser = await getCurrentUser();
    const client = getClient();
    client.setLink(setAuthToken(sessionUser?.accessToken as string).concat(httpLink));

    if (!sessionUser) {
        return { error: 'Unauthorized' };
    }

    try {
        const { data } = await client.mutate<UpdateEmailMutation>({
            mutation: UpdateEmailDocument,
            variables: {
                data: {
                    email: values.email,
                    code: values.code,
                    token: 'token',
                },
            },
        });

        if (!data?.updateEmail?.user) {
            return { error: 'Failed to update email' };
        }

        const updatedUser = data.updateEmail.user;

        // Update the session with the new user data, handling null values
        await unstable_update({
            user: {
                ...sessionUser,
                email: updatedUser.email as string,
                username: updatedUser.username as string,
                name: updatedUser.name as string,
                avatarImage: updatedUser.avatarImage as string,
                refreshToken: data.updateEmail.refreshToken as string,
                accessToken: data.updateEmail.accessToken as string,
                expiresIn: data.updateEmail.expiresIn as number,
            }
        });

        return {
            success: `Email updated successfully to ${updatedUser.email}`, data: data.updateEmail
        };
    } catch (error: any) {
        if (error.graphQLErrors) {
            return { error: error.graphQLErrors[0].message }
        }
        return { error: 'There was a problem with your request' };
    }
};
