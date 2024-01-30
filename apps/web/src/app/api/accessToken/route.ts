import { auth } from "@/auth";

export async function GET() {
  const session = await auth();
  if (session?.user) {
    return Response.json({ session: session.user }, { status: 200 });
  }

  return new Response(null, { status: 403 });
}
