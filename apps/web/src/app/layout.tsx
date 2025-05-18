import './globals.css';
import '@smastrom/react-rating/style.css';
import { Inter } from 'next/font/google';
import { ApolloClientProvider } from '@/providers/apollo-provider';
import { SessionProvider } from 'next-auth/react';
import { Toaster } from '@/components/ui/toaster';
import { ModalProvider } from '@/providers/modal-provider';
import NextTopLoader from 'nextjs-toploader';
import QueryProvider from '@/providers/query-provider';
import { auth } from '@/auth';

const inter = Inter({ subsets: ['latin'] });

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

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
