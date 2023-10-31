"use client";
import "./globals.css";
import "@smastrom/react-rating/style.css";
import { Inter } from "next/font/google";
import { ApolloClientProvider } from "@/lib/apollo/ApolloClientProvider";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";
import { ModalProvider } from "@/providers/modal-provider";

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
