import {
  ResetPasswordMutation,
  ResetPasswordDocument,
} from "@/graphql/graphql";
import { getApolloClient } from "@/lib/apollo";
import { NewPasswordSchema } from "@/schemas/auth";
import { z } from "zod";

export const resetPassword = async (
  values: z.infer<typeof NewPasswordSchema>,
  token?: string | null
) => {
  if (!token) {
    return { error: "Missing token!" };
  }

  const validatedFields = NewPasswordSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const client = getApolloClient();

  const { password } = validatedFields.data;

  try {
    const { errors } = await client.mutate<ResetPasswordMutation>({
      mutation: ResetPasswordDocument,
      variables: {
        input: {
          password,
          token,
        },
      },
      errorPolicy: "all",
    });
    // Handle error
    console.log(errors?.map((e) => e.message));
  } catch (error) {
    return { error: "Unable to change password, Please try again" };
  }

  return { success: "Password updated!" };
};
