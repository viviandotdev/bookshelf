'use client';
import './globals.css';
import '@smastrom/react-rating/style.css';
import { Inter } from 'next/font/google';
import { ApolloClientProvider } from '@/providers/apollo-provider';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from '@/components/ui/toaster';
import { ModalProvider } from '@/providers/modal-provider';
import NextTopLoader from 'nextjs-toploader';
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import QueryProvider from '@/providers/query-provider';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
  session,
}: {
  children: React.ReactNode;
  session: any;
}) {
  return (
    <html lang='en' suppressHydrationWarning>
      <body className={`${inter.className} bg-background`}>
        <NextTopLoader
          color='#4E3B2C'
          initialPosition={0.08}
          crawlSpeed={200}
          height={3}
          crawl={false}
          showSpinner={false}
          easing='ease'
          speed={200}
        />
        <SessionProvider session={session}>
          <ApolloClientProvider>
            <QueryProvider>
              <ModalProvider />
              <Toaster />
              {children}
            </QueryProvider>
          </ApolloClientProvider>
        </SessionProvider>
      </body>
    </html>
  );
}
