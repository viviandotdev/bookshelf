"use client";

import { useCallback, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { signIn } from "next-auth/react";
import React from "react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

export const NewVerificationForm = () => {
    const [error, setError] = useState<string | undefined>();
    const [success, setSuccess] = useState<string | undefined>();
    const searchParams = useSearchParams();

    const token = searchParams.get("token");
    const email = searchParams.get("email");

    const onSubmit = useCallback(async () => {
        if (success || error) return;

        if (!token) {
            // redirect to error page
            return;
        }
        const res = await signIn("credentials", {
            token,
            redirectTo: DEFAULT_LOGIN_REDIRECT,
        })

        if (res?.error) {


        }


    }, [token, success, error]);

    useEffect(() => {
        onSubmit();
    }, [onSubmit]);

    return (
        <div className="flex items-center w-full justify-center">
            {!success && !error && (

                <div>Loading...</div>
            )}
        </div>

    )
}
