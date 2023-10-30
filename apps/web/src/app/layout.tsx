"use client";
import "./globals.css";
import "@smastrom/react-rating/style.css";
import { Inter } from "next/font/google";
import { ApolloClientProvider } from "@/src/lib/apollo/ApolloClientProvider";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/src/components/ui/toaster";
import StatusModal from "@/src/components/modal/status-modal";
import { ShelfModal } from "@/src/components/modal/shelf-modal";
import { AddToShelfModal } from "@/src/components/modal/add-to-shelf-modal";
import { JouranlEntryModal } from "@/src/components/modal/journal-entry-modal";

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
