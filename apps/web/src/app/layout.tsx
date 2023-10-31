"use client";
import "./globals.css";
import "@smastrom/react-rating/style.css";
import { Inter } from "next/font/google";
import { ApolloClientProvider } from "@/lib/apollo/ApolloClientProvider";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";
import StatusModal from "@/components/modal/status-modal";
import { ShelfModal } from "@/components/modal/shelf-modal";
import { AddToShelfModal } from "@/components/modal/add-to-shelf-modal";
import { JouranlEntryModal } from "@/modules/journal/components/journal-entry-modal";

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
                        <StatusModal />
                        <ShelfModal />
                        <AddToShelfModal />
                        <JouranlEntryModal />
                        {children}
                    </ApolloClientProvider>
                    <Toaster />
                </SessionProvider>
            </body>
        </html>
    );
}
