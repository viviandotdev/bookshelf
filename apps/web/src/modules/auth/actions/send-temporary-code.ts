"use server"

import { SendTemporaryCodeDocument } from '@/graphql/graphql';
import { getClient } from '@/lib/apollo-client';
import { z } from 'zod';

const sendTemporaryCodeSchema = z.object({
    email: z.string().email('Invalid email address'),
});

export const sendTemporaryCode = async (values: z.infer<typeof sendTemporaryCodeSchema>) => {
    const client = getClient();
    const validatedFields = sendTemporaryCodeSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: 'Invalid email address' };
    }

    const { email } = validatedFields.data;

    try {
        await client.mutate({
            mutation: SendTemporaryCodeDocument,
            variables: {
                email,
            },
        });

        return { success: 'Temporary code sent successfully!' };
    } catch (error) {
        return { error: 'Failed to send temporary code. Please try again later.' };
    }
};
