import { getClient } from '@/libs/client'
import { GetUserQuery, GetUserDocument } from '@/graphql/graphql'

export default async function Home() {
  const client = getClient()
  const { data } = await client.query<GetUserQuery>({
    query: GetUserDocument,
    variables: {
      where: {
        email: 'admin@bookcue.com'
      }
    }
  })

  if (data) {
    console.log(data)
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <div>Hello from next js</div>
    </main>
  )
}
