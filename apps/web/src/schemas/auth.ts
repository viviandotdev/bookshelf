import * as z from 'zod';

export const loginUserSchema = z.object({
    email: z.string().email(),
    password: (z.string().min(4)),
});

export const registerUserSchema = z.object({
    email: z.string().email(),
    password: z.string().min(4),
    username: z.string().min(4).max(100),
});
export const changeEmailSchema = z.object({
    email: z.string().email(),
    code: (z.string().min(1)),
});

export const sendCodeSchema = z.object({
    email: z.string().email(),
});

export const changePasswordSchema = z
    .object({
        password: z.optional(z.string().min(4)),
        newPassword: z.optional(z.string().min(4)),
        confirmPassword: z.optional(z.string().min(4)),
    })
    .refine(
        (data) => {
            if (data.password && !data.newPassword) {
                return false;
            }

            return true;
        },
        {
            message: 'New password is required!',
            path: ['newPassword'],
        }
    )
    .refine(
        (data) => {
            if (data.newPassword && !data.password && !data.confirmPassword) {
                return false;
            }

            return true;
        },
        {
            message: 'Password is required!',
            path: ['password'],
        }
    )
    .refine(
        (data) => {
            if (data.newPassword !== data.confirmPassword) {
                return false;
            }

            return true;
        },
        {
            message: 'Passwords do not match!',
            path: ['password'],
        }
    );

export const ResetSchema = z.object({
    email: z.string().email({
        message: 'Please enter a valid email',
    }),
});

export const NewPasswordSchema = z.object({
    password: z.string().min(4, {
        message: 'Minimum of 4 characters required',
    }),
});

export const SettingsSchema = z.object({
    username: z.optional(
        z
            .string()
            .min(3, { message: 'Username must be at least 3 characters long' }) // Minimum length
            .max(20, { message: 'Username must be no longer than 20 characters' }) // Maximum length
            .regex(/^[a-zA-Z0-9_]+$/, {
                message:
                    'Username can only contain alphanumeric characters and underscores',
            })
    ), // Allowed characters
    email: z.optional(z.string().email()),
    location: z.optional(z.string()),
    name: z.optional(z.string()),
    bio: z.optional(
        z.string().max(160, {
            message: 'Bio must not be longer than 160 characters.',
        })
    ),
    avatarImage: z.optional(z.string()),
});

// Individual schemas for settings
export const settingsNameSchema = SettingsSchema.pick({
    name: true,
});

export const settingsUsernameSchema = SettingsSchema.pick({
    username: true,
});

export const settingsLocationSchema = SettingsSchema.pick({
    location: true,
});

export const settingsBioSchema = SettingsSchema.pick({
    bio: true,
});
