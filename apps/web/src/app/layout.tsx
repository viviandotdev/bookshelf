"use client";
import "./globals.css";
import "@smastrom/react-rating/style.css";
import { Inter } from "next/font/google";
import { ApolloClientProvider } from "@/providers/apollo-provider";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";
import { ModalProvider } from "@/providers/modal-provider";
import NextTopLoader from 'nextjs-toploader';
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
                    color="#4E3B2C"
                    initialPosition={0.08}
                    crawlSpeed={200}
                    height={3}
                    crawl={false}
                    showSpinner={false}
                    easing="ease"
                    speed={200}
                />
                <SessionProvider session={session}>
                    <ApolloClientProvider>
                        <ModalProvider />
                        <Toaster />
                        {children}
                    </ApolloClientProvider>
                </SessionProvider>
            </body>
        </html>
    );
}
