"use server"
import { RegisterDocument, RegisterMutation } from '@/graphql/graphql';
import { getClient } from '@/lib/apollo-client';
import { registerUserSchema } from '@/schemas/auth';
import { z } from 'zod';

export const login = async (values: z.infer<typeof registerUserSchema>) => {
    const client = getClient();
    const validatedFields = registerUserSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: 'Invalid fields!' };
    }

    const { email, password, username } = validatedFields.data;
    try {
        const { errors } = await client.mutate<RegisterMutation>({
            mutation: RegisterDocument,
            variables: {
                input: {
                    email,
                    password,
                    username,
                },
            },
        });
        console.log(errors);
    } catch (error) {
        console.log(error);

        return { error: 'An error occurred! Try again later' };
    }

    return { success: 'Confirmation email sent!' };
};
