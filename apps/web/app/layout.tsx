import './globals.css'
import { Inter } from 'next/font/google'
import { ApolloClientProvider } from '@/libs/apollo/ApolloClientProvider'
const inter = Inter({ subsets: ['latin'] })

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className={inter.className}>
        <ApolloClientProvider>
          <main className='py-4 px-2'>{children}</main>
        </ApolloClientProvider>
      </body>
    </html>
  )
}
