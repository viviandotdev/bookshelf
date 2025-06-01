"use server"
import { GetLoginOptionsDocument, GetLoginOptionsQuery } from '@/graphql/graphql';
import { getClient } from '@/lib/apollo-client';
import { loginOptionsSchema } from '@/schemas/auth';
import { z } from 'zod';



export const getLoginOptions = async (values: z.infer<typeof loginOptionsSchema>) => {
    const client = getClient();
    const validatedFields = loginOptionsSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: 'Invalid fields!' };
    }

    try {
        const { data } = await client.query<GetLoginOptionsQuery>({
            query: GetLoginOptionsDocument,
            variables: {
                email: validatedFields.data.email
            }
        });

        return {
            hasAccount: data.getLoginOptions.hasAccount,
            passwordSignIn: data.getLoginOptions.passwordSignIn
        };
    } catch (error) {
        return { error: 'Something went wrong!' };
    }
};
