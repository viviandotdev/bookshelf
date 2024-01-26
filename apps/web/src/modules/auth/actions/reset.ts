import { SignUpMutation, SignUpDocument } from "@/graphql/graphql";
import { getApolloClient } from "@/lib/apollo";
import { ResetSchema, registerUserSchema } from "@/schemas/auth";
import { z } from "zod";

export const reset = async (values: z.infer<typeof ResetSchema>) => {
  const client = getApolloClient();
  const validatedFields = ResetSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid emaiL!" };
  }

  const { email } = validatedFields.data;
  try {
    // const { data, errors } = await client.mutate<ForgotPasswordMutation>({
    //   mutation: ,
    //   variables: {
    //     input: {
    //       email,
    //       password,
    //       username,
    //     },
    //   },
    // });
  } catch (error) {
    return { error: "Unable to generate reset token" };
  }

  return { success: "Reset email sent!" };
};
