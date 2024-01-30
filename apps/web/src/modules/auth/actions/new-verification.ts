import { VerifyTokenMutation, VerifyTokenDocument } from "@/graphql/graphql";
import { getApolloClient } from "@/lib/apollo";

export const newVerification = async (token: string) => {
  const client = getApolloClient();

  const { errors } = await client.mutate<VerifyTokenMutation>({
    mutation: VerifyTokenDocument,
    variables: {
      token,
    },
    errorPolicy: "all",
  });

  if (errors) {
    console.log(errors);
    return { error: "Invalid token" };
  }

  return { success: "Email Verified!" };
};
