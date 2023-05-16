import { getCurrentUser } from '@/lib/auth/session'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function Dashboard() {
  const user = await getCurrentUser()
  if (!user) {
    redirect(authOptions?.pages?.signIn || '/login')
  }


  return (
    <div className='p-6'>
      Super secret page
    
    </div>
  )
}
