"use server"
import { signIn } from '@/auth';
import { loginUserSchema } from '@/schemas/auth';
import { z } from 'zod';

export const loginUser = async (values: z.infer<typeof loginUserSchema>) => {
    const validatedFields = loginUserSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: 'Invalid fields!' };
    }

    try {
        await signIn('credentials', {
            email: values.email,
            password: values.password,
            redirect: false
        });
    } catch (error: any) {
        if (error.code === "credentials") {
            return { error: "Incorrect credentials" }
        }
    }
    return { success: 'User logged in successfully' };
};
