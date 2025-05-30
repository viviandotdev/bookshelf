"use server"
import { signIn } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { loginUserSchema } from '@/schemas/auth';
import { AuthError } from 'next-auth';
import { z } from 'zod';

export const loginUser = async (values: z.infer<typeof loginUserSchema>) => {
    const validatedFields = loginUserSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: 'Invalid fields!' };
    }

    try {
        await signIn('credentials', {
            email: values.email.toLowerCase(),
            password: values.password,
            redirectTo: values.redirectTo || DEFAULT_LOGIN_REDIRECT,
        });
    } catch (error) {
        if (error instanceof AuthError) {
            return { error: 'Invalid email or password' };
        }
        throw error;
    }
    return { success: 'User logged in successfully' };
};
