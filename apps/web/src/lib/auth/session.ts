import { auth } from "../../../auth";

export async function getCurrentUser() {
  const session = await auth();
  if (!session || session?.error == "TokenExpiredError" || !session?.user) {
    return null;
  }
  return session?.user;
}
