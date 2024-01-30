"use server";

import * as z from "zod";

import { getCurrentUser } from "@/lib/auth";
import { SettingsSchema } from "@/schemas/auth";
import { unstable_update } from "@/auth";
import { setAuthToken, httpLink, getApolloClient } from "@/lib/apollo";
import { UpdateUserDocument, UpdateUserMutation } from "@/graphql/graphql";

export const settings = async (values: z.infer<typeof SettingsSchema>) => {
  const user = await getCurrentUser();
  const client = getApolloClient();
  client.setLink(setAuthToken(user.accessToken as string).concat(httpLink));
  if (!user) {
    return { error: "Unauthorized" };
  }

  if (user.isOAuth) {
    values.email = undefined;
    values.password = undefined;
    values.newPassword = undefined;
  }

  const { data, errors } = await client.mutate<UpdateUserMutation>({
    mutation: UpdateUserDocument,
    variables: {
      data: {
        ...values,
      },
    },
  });

  if (errors) {
    return { error: errors?.map((e) => e.message)[0] };
  }

  if (values.email && values.email !== data?.updateUser.email) {
    return { success: "Check your email for a verification link!" };
  }

  unstable_update({
    user: {
      username: data?.updateUser.username,
      email: data?.updateUser.email,
    },
  });

  return { success: "Settings Updated!" };
};
