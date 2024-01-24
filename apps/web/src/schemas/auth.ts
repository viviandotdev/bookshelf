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
