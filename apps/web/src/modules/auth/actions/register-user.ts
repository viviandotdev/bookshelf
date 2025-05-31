"use server"
import { signIn } from '@/auth';
import { RegisterDocument, RegisterMutation } from '@/graphql/graphql';
import { getClient } from '@/lib/apollo-client';
import { registerUserSchema } from '@/schemas/auth';
import { z } from 'zod';

export const regsiterUser = async (values: z.infer<typeof registerUserSchema>) => {
    const client = getClient();
    const validatedFields = registerUserSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: 'Invalid fields!' };
    }

    const { email, password, username } = validatedFields.data;
    try {
        await client.mutate<RegisterMutation>({
            mutation: RegisterDocument,
            variables: {
                input: {
                    email,
                    password,
                    username,
                },
            },
        });

        await signIn('credentials', {
            email: values.email,
            password: values.password,
            redirect: false
        });

    } catch (error: any) {
        if (error.graphQLErrors) {
            return { error: error.graphQLErrors[0].message }
        }
        return { error: 'Sign up failed! Try again later' };

    }


    return { success: 'Account created successfully!' };
};
