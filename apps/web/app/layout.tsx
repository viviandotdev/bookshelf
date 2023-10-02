"use client";
import "./globals.css";
import "@smastrom/react-rating/style.css";
import { Inter } from "next/font/google";
import { ApolloClientProvider } from "@/lib/apollo/ApolloClientProvider";
import { SessionProvider } from "next-auth/react";
import { Toaster } from "@/components/ui/toaster";
import ShelveModal from "@/components/modal/shelve-modal";
import StatusModal from "@/components/modal/status-modal";

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
      <body className={inter.className}>
        <SessionProvider session={session}>
          <ApolloClientProvider>
            <StatusModal />
            {children}
          </ApolloClientProvider>
          <Toaster />
          <ShelveModal />
        </SessionProvider>
      </body>
    </html>
  );
}
