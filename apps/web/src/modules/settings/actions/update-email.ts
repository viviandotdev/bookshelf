'use server';

import * as z from 'zod';
import { getCurrentUser } from '@/lib/auth';
import { setAuthToken, httpLink } from '@/lib/apollo';
import { UpdateEmailDocument, UpdateEmailMutation } from '@/graphql/graphql';
import { changeEmailSchema } from '../components/modals/change-email';
import { getClient } from '@/lib/apollo-client';
import { unstable_update } from '@/auth';

export const updateEmail = async (
    values: z.infer<typeof changeEmailSchema>
) => {
    const user = await getCurrentUser();

    if (!user) {
        return { error: 'Unauthorized' };
    }
    const client = getClient();
    client.setLink(setAuthToken(user.accessToken as string).concat(httpLink));


    try {
        const { data, errors } = await client.mutate<UpdateEmailMutation>({
            mutation: UpdateEmailDocument,
            variables: {
                data: {
                    email: values.email,
                    code: values.code,
                    token: 'token',
                },
            },
            errorPolicy: 'all',
        });

        if (errors) {
            return { error: errors?.map((e) => e.message)[0] };
        }
        // fix unstable update
        unstable_update({
            user: {
                email: data?.updateEmail.email,
            },
        });
    } catch (error) {
        return { error: 'There was a problem with your request' };
    }

    // if there is a code, we can actually change the email, otherwise we need to send a verification code
    return {
        success: `We updated your email to ${values.email}`,
    };
};
