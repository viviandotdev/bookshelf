'use server';

import * as z from 'zod';
import { getCurrentUser } from '@/lib/auth';
import { setAuthToken, httpLink } from '@/lib/apollo';
import { SendEmailCodeDocument, SendEmailCodeMutation } from '@/graphql/graphql';
import { changeEmailSchema } from '../components/modals/change-email';
import { getClient } from '@/lib/apollo-client';

export const sendEmailCode = async (
    values: z.infer<typeof changeEmailSchema>
) => {
    const user = await getCurrentUser();
    const client = getClient();
    client.setLink(setAuthToken(user?.accessToken as string).concat(httpLink));

    if (!user) {
        return { error: 'Unauthorized' };
    }

    try {
        await client.mutate<SendEmailCodeMutation>({
            mutation: SendEmailCodeDocument,
            variables: {
                email: values.email,
            },
        });

        return {
            success: `We just sent you a temporary verification code to ${values.email}`,
        };
    } catch (error: any) {
        if (error.graphQLErrors) {
            return { error: error.graphQLErrors[0].message }
        }
        return { error: 'There was a problem with your request' };
    }
};
