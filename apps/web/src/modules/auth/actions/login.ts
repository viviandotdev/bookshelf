import { signIn } from "@/auth";
import { getApolloClient } from "@/lib/apollo";
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

  try {
    const res = await signIn("credentials", {
      //   redirect: false,
      email,
      password,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });
    if (res) {
      console.log(res);
    }
  } catch (err: any) {
    console.log(err);
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
