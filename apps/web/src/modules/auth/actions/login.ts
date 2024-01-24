import { signIn } from "@/auth";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { loginUserSchema } from "@/schemas/auth";
import { AuthError } from "next-auth";
import { z } from "zod";

export const login = async (values: z.infer<typeof loginUserSchema>) => {
  const validatedFields = loginUserSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password } = validatedFields.data;
  //   generateEmailVerificationTokens
  const isVerified = false
//   create resolver verifyToken
// takes in the username and email
// checkif if the email is verified
// if the email is verified, return true
// if the email is not verified, return false

  if (!isVerified) {
    return { success: "Confirmation email sent!" };
  }

  try {
    await signIn("credentials", {
      //   redirect: false,
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
  } catch (err: any) {
    if (err instanceof AuthError) {
      switch (err.type) {
        case "CredentialsSignin":
          return { error: "Invalid credentials!" };
        default:
          return { error: "Something went wrong!" };
      }
    }

    throw err;
  }
};
