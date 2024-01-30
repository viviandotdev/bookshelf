import { RegisterDocument, RegisterMutation } from "@/graphql/graphql";
import { getApolloClient } from "@/lib/apollo";
import { registerUserSchema } from "@/schemas/auth";
import { z } from "zod";

export const register = async (values: z.infer<typeof registerUserSchema>) => {
  const client = getApolloClient();
  const validatedFields = registerUserSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: "Invalid fields!" };
  }

  const { email, password, username } = validatedFields.data;
  try {
    const { data, errors } = await client.mutate<RegisterMutation>({
      mutation: RegisterDocument,
      variables: {
        input: {
          email,
          password,
          username,
        },
      },
    });
  } catch (error) {
    return { error: "Email or username already exists" };
  }

  return { success: "Confirmation email sent!" };
};
