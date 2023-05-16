'use client'

import { Button } from '@/components/ui/button'
import { useGetUsersQuery, useLogoutMutation } from '@/graphql/graphql'
import { signOut, useSession } from 'next-auth/react'
import { useApolloClient } from '@apollo/client'

export default function Dashboard() {
  const session = useSession()
  const { data, loading } = useGetUsersQuery()
  const [logout] = useLogoutMutation()
  const apolloClient = useApolloClient()
  let content = <div>User query failed</div>

  if (loading) {
    content = <div>Loading users on the client</div>
  } else if (data) {
    content = (
      <div>
        {data!.users.map((u) => (
          <div key={u.id}>{u.email}</div>
        ))}
      </div>
    )
  }

  return (
    <div className='p-6'>
      {content}
      <Button
        onClick={async () => {
          await logout({
            variables: {
              id: session.data?.user.id
            }
          })
          await apolloClient.resetStore()
          signOut({
            callbackUrl: `${window.location.origin}/login`
          })
        }}
        className='w-full'
      >
        Sign Out
      </Button>
    </div>
  )
}
