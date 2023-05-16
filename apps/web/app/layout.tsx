'use client'
import './globals.css'
import { Inter } from 'next/font/google'
import { ApolloClientProvider } from '@/lib/apollo/ApolloClientProvider'
import { SessionProvider } from 'next-auth/react'

const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({
  children,
  session
}: {
  children: React.ReactNode
  session: any
}) {
  return (
    <html lang='en'>
      <body className={inter.className} suppressHydrationWarning={true}>
        <SessionProvider session={session}>
          <ApolloClientProvider>{children}</ApolloClientProvider>
        </SessionProvider>
      </body>
    </html>
  )
}
