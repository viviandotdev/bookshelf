"use server";

import * as z from "zod";
import { getCurrentUser } from "@/lib/auth";
import { setAuthToken, httpLink, getApolloClient } from "@/lib/apollo";
import { UpdateUserDocument, UpdateUserMutation } from "@/graphql/graphql";
import { changeEmailSchema } from "../components/modals/change-email";

export const verifyCode = async (values: z.infer<typeof changeEmailSchema>) => {
  const user = await getCurrentUser();
  const client = getApolloClient();
  client.setLink(setAuthToken(user.accessToken as string).concat(httpLink));

  if (!user) {
    return { error: "Unauthorized" };
  }

  try {
    const { data, errors } = await client.mutate<UpdateUserMutation>({
      mutation: UpdateUserDocument,
      variables: {
        data: {
          email: values.email,
        },
      },
      errorPolicy: "all",
    });

    if (errors) {
      return { error: errors?.map((e) => e.message)[0] };
    }

    if (values.email && values.email === data?.updateUser.email) {
      return { error: "Please enter a new email" };
    }
  } catch (error) {
    return { error: "There was a problem with your request" };
  }
  // if there is a code, we can actually change the email, otherwise we need to send a verification code
  return {
    success: `We just sent you a temporary verification code to ${values.email}`,
  };
};
