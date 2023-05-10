'use client'

import { useGetUsersQuery } from '@/graphql/graphql'
import { ApolloClientProvider } from '@/libs/apollo/ApolloClientProvider'

export default function ClientFetching() {
  const { data, loading } = useGetUsersQuery()

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
    <ApolloClientProvider>
      <div className='p-6'>{content}</div>
    </ApolloClientProvider>
  )
}
