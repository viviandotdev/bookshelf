import { getServerSession } from "next-auth/next";
import { authOptions } from "./auth";

export async function getCurrentUser() {
  const session = await getServerSession(authOptions);
  if (!session || session?.error == "TokenExpiredError" || !session?.user) {
    return null;
  }
  return session?.user;
}
