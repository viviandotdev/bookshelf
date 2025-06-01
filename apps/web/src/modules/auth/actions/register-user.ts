"use server"
import { RegisterDocument, RegisterMutation } from '@/graphql/graphql';
import { getClient } from '@/lib/apollo-client';
import { z } from 'zod';

const registerUserSchema = z.object({
    email: z.string().email(),
    code: z.optional(z.string().min(6)),
    password: z.optional(z.string().min(4)),
});


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
