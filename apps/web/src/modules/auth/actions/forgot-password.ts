"use server"
import {
    ForgotPasswordMutation,
    ForgotPasswordDocument,
} from '@/graphql/graphql';
import { getClient } from '@/lib/apollo-client';
import { ResetSchema } from '@/schemas/auth';
import { z } from 'zod';

export const forgotPassword = async (values: z.infer<typeof ResetSchema>) => {
    const client = getClient();
    const validatedFields = ResetSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: 'Invalid email!' };
    }

    const { email } = validatedFields.data;

    try {
        await client.mutate<ForgotPasswordMutation>({
            mutation: ForgotPasswordDocument,
            variables: {
                email,
            },
        });
        return { success: 'Check your inbox for the link to reset your password' };
    } catch (error) {
        return { error: 'Failed to process password reset. Please try again later.' };
    }
};
