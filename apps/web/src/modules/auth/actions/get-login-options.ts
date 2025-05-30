"use server"
import { RegisterDocument, RegisterMutation } from '@/graphql/graphql';
import { getClient } from '@/lib/apollo-client';
import { loginUserSchema } from '@/schemas/auth';
import { z } from 'zod';

export const getLoginOptions = async (values: z.infer<typeof loginUserSchema>) => {
    const client = getClient();
    const validatedFields = loginUserSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: 'Invalid fields!' };
    }

    // getLoginOptions
    // {
    //     "hasAccount": true,
    //     "passwordSignIn": true
    // if has passwordSignIn show password input
    // if passwordSign is false show code input
    // }
    // return { error: "Invalid email format"}
    // return { error: "We could not reach the email address you provided. Please try again with a different email."}
    return { success: 'Confirmation email sent!', passwordSignIn: true };
};
