"use server"
import { signIn } from '@/auth';
import { z } from 'zod';

const loginUserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4),
    type: z.enum(['password', 'code']),
});


export const loginUser = async (values: z.infer<typeof loginUserSchema>) => {
    const validatedFields = loginUserSchema.safeParse(values);

    if (!validatedFields.success) {
        return { error: 'Invalid fields!' };
    }

    try {
        await signIn('credentials', {
            email: values.email,
            password: values.password,
            type: values.type,
            redirect: false
        });
    } catch (error: any) {
        if (error.code === "credentials") {
            return { error: "Incorrect credentials" }
        }
    }
    return { success: 'User logged in successfully' };
};
