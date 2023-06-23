import { getServerSession } from 'next-auth/next'
import { authOptions } from './auth'

export async function getCurrentUser() {
  const session: any = await getServerSession(authOptions)
    
    return session?.user
  }
  
