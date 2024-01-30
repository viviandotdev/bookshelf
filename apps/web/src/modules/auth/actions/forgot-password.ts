import {
  ForgotPasswordMutation,
  ForgotPasswordDocument,
} from "@/graphql/graphql";
import { getApolloClient } from "@/lib/apollo";
import { ResetSchema } from "@/schemas/auth";
import { z } from "zod";

export const forgotPassword = async (values: z.infer<typeof ResetSchema>) => {
  const client = getApolloClient();
  const validatedFields = ResetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid emaiL!" };
  }

  const { email } = validatedFields.data;
  try {
    await client.mutate<ForgotPasswordMutation>({
      mutation: ForgotPasswordDocument,
      variables: {
        email,
      },
    });
  } catch (error) {
    return { error: "Unable to generate reset token" };
  }

  return { success: "Check your inbox for the link to reset your password" };
};
