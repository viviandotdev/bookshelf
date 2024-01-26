import * as z from "zod";

export const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
});

export const registerUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
  username: z.string().min(4).max(100),
});

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Email is required",
  }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(4, {
    message: "Minimum of 4 characters required",
  }),
});
