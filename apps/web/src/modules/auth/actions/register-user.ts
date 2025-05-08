import { RegisterDocument, RegisterMutation } from '@/graphql/graphql';
import { getApolloClient } from '@/lib/apollo';
import { registerUserSchema } from '@/schemas/auth';
import { z } from 'zod';

export const regsiterUser = async (values: z.infer<typeof registerUserSchema>) => {
  const client = getApolloClient();
  const validatedFields = registerUserSchema.safeParse(values);

  if (!validatedFields.success) {
    return { error: 'Invalid fields!' };
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
    console.log(errors);
  } catch (error) {
    console.log(error);
    return { error: 'An error occurred! Try again later' };
  }

  return { success: 'Confirmation email sent!' };
};
