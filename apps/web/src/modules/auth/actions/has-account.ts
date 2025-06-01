"use server"
import { HasAccountDocument, HasAccountQuery, RegisterDocument, RegisterMutation } from '@/graphql/graphql';
import { getClient } from '@/lib/apollo-client';
import { z } from 'zod';

const hasAccountSchema = z.object({
    email: z.string().email(),
});

export const hasAccount = async (values: z.infer<typeof hasAccountSchema>) => {
    const client = getClient();
    const validatedFields = hasAccountSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: 'Invalid fields!' };
    }

    const { email } = validatedFields.data;
    try {
        const { data } = await client.query<HasAccountQuery>({
            query: HasAccountDocument,
            variables: {
                email
            },
        });
        return { data: data?.hasAccount };
    } catch (error) {
        return { error: 'Sign up failed! Try again later' };
    }



};
