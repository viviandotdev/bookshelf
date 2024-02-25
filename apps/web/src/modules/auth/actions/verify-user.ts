import { signIn } from '@/auth';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';

export const verifyUser = async (token: string | string[] | undefined) => {
  try {
    // Remove user from session

    const res = await signIn('credentials', {
      token,
      redirectTo: DEFAULT_LOGIN_REDIRECT,
    });

    if (res?.error) {
    }
  } catch (error) {
    console.log(error);
    return { error: 'Unable to generate reset token' };
  }
  console.log('success');

  return { success: 'Email reset' };
};
