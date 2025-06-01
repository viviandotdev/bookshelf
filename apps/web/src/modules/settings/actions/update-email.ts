'use server';

import * as z from 'zod';
import { getCurrentUser } from '@/lib/auth';
import { setAuthToken, httpLink, getApolloClient } from '@/lib/apollo';
import { UpdateEmailDocument, UpdateEmailMutation } from '@/graphql/graphql';
import { changeEmailSchema } from '../components/modals/change-email';
import { unstable_update } from '@/auth';
import { getClient } from '@/lib/apollo-client';

export const updateEmail = async (
    values: z.infer<typeof changeEmailSchema>
) => {
    const user = await getCurrentUser();

    if (!user) {
        return { error: 'Unauthorized' };
    }

    const client = getClient();
    client.setLink(setAuthToken(user.accessToken as string).concat(httpLink));

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
        return { error: 'There was an error updating your email' };
    }
    // fix unstable update
    unstable_update({
        user: {
            email: data?.updateEmail.email,
        },
    });

    // if there is a code, we can actually change the email, otherwise we need to send a verification code
    return {
        success: `We updated your email to ${values.email}`,
    };
};
