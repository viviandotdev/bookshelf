'use server';

import * as z from 'zod';
import { changeAvatarSchema } from '../components/modals/change-avatar';
import { getApolloClient, httpLink, setAuthToken } from '@/lib/apollo';
import { UpdateUserMutation, UpdateUserDocument } from '@/graphql/graphql';
import { getCurrentUser } from '@/lib/auth';
import { unstable_update } from '@/auth';

export const changeAvatar = async (
    values: z.infer<typeof changeAvatarSchema>
) => {
    const user = await getCurrentUser();
    const client = getApolloClient();
    client.setLink(setAuthToken(user.accessToken as string).concat(httpLink));

    if (!user) {
        return { error: 'Unauthorized' };
    }

    try {
        const { data, errors } = await client.mutate<UpdateUserMutation>({
            mutation: UpdateUserDocument,
            variables: {
                data: {
                    avatarImage: values.image,
                },
            },
            errorPolicy: 'all',
        });

        if (errors) {
            return { error: errors?.map((e) => e.message)[0] };
        }

        unstable_update({
            user: {
                avatarImage: values.image,
            },
        });

        // if (values.image && values.image === user.avatarImage) {
        //   return { error: 'Please select new avatar' };
        // }
    } catch (error) {
        return { error: 'There was a problem with your request' };
    }
    // if there is a code, we can actually change the email, otherwise we need to send a verification code
    return {
        success: `Avatar updated`,
    };
};
