"use client";
import "./globals.css";
import "@smastrom/react-rating/style.css";
import { Inter } from "next/font/google";
import { ApolloClientProvider } from "@/lib/apollo/ApolloClientProvider";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";
import { ModalProvider } from "@/providers/modal-provider";
import { Provider } from 'react-redux';
import { store } from "@/stores";
import NextTopLoader from 'nextjs-toploader';
import { RouteChangeHandler } from "@/hooks/use-route-change";
import PageLoadingIndicator from "@/modules/layout/components/page-load-indicator";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
    children,
    session,
}: {
    children: React.ReactNode;
    session: any;
}) {

    return (
        <html lang="en" suppressHydrationWarning>
            <body className={`${inter.className}`}>
                <NextTopLoader
                    color="#2299DD"
                    initialPosition={0.08}
                    crawlSpeed={200}
                    height={3}
                    crawl={true}
                    showSpinner={true}
                    easing="ease"
                    speed={200}
                    shadow="0 0 10px #2299DD,0 0 5px #2299DD"
                />
                <SessionProvider session={session}>
                    <ApolloClientProvider>
                        <Provider store={store}>
                            <ModalProvider />
                            <Toaster />
                            {children}
                        </Provider>
                    </ApolloClientProvider>
                </SessionProvider>
            </body>
        </html>
    );
}
