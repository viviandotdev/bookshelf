"use server"
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

    // const { email, password } = validatedFields.data;

    // const { errors } = await client.mutate<RegisterMutation>({

    //     mutation: RegisterDocument,
    //     variables: {
    //         input: {
    //             email,
    //             password,
    //             username,
    //         },
    //     },
    // });

    // if (errors) {
    //     return { error: 'Sign up failed! Try again later' };
    // }

    return { success: 'Account created successfully!' };
};
