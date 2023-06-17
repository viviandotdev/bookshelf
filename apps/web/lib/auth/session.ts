import { getServerSession } from 'next-auth/next'
import { authOptions } from './auth'
import { redirect } from 'next/navigation';

export async function getCurrentUser() {
  const session: any = await getServerSession(authOptions)
    
    return session?.user
  }
  
