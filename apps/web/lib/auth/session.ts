import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { getServerSession } from 'next-auth/next'
import { redirect } from 'next/navigation'

export async function getCurrentUser() {
  const session: any = await getServerSession(authOptions)
  return session?.user
}
