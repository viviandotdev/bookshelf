import { authOptions } from "@/lib/auth/auth";
import { getCurrentUser } from "@/lib/auth/session";
import { redirect } from "next/navigation";
import React from "react";

interface ImportPageProps { }

export default async function ImportPage({ }: ImportPageProps) {
    const user = await getCurrentUser();
    if (!user) {
        redirect(authOptions?.pages?.signIn || "/login");
    }

    return (
        <>
            <div className="w-full grid grid-cols-4 gap-6">
                Import page
            </div >
        </>
    );
}
