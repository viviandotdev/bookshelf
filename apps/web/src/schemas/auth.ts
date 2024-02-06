import * as z from "zod";

export const loginUserSchema = z.object({
  email: z.string().email(),
  password: z.optional(z.string().min(4)),
});

export const registerUserSchema = z.object({
  email: z.string().email(),
  password: z.string().min(4),
  username: z.string().min(4).max(100),
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
      message: "New password is required!",
      path: ["newPassword"],
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
      message: "Password is required!",
      path: ["password"],
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
      message: "Passwords do not match!",
      path: ["password"],
    }
  );

export const ResetSchema = z.object({
  email: z.string().email({
    message: "Please enter a valid email",
  }),
});

export const NewPasswordSchema = z.object({
  password: z.string().min(4, {
    message: "Minimum of 4 characters required",
  }),
});

export const SettingsSchema = z
  .object({
    username: z.optional(z.string()),
    email: z.optional(z.string().email()),
    password: z.optional(z.string().min(4)),
    newPassword: z.optional(z.string().min(4)),
  })
  .refine(
    (data) => {
      if (data.password && !data.newPassword) {
        return false;
      }

      return true;
    },
    {
      message: "New password is required!",
      path: ["newPassword"],
    }
  )
  .refine(
    (data) => {
      if (data.newPassword && !data.password) {
        return false;
      }

      return true;
    },
    {
      message: "Password is required!",
      path: ["password"],
    }
  );
