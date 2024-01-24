"use client";
import { Button } from "@/components/ui/button";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";

export const Social = () => {
    const onClick = (provider: "google" | "github") => {

        signIn(provider, {
            callbackUrl: DEFAULT_LOGIN_REDIRECT,

        })
    }
    return (
        <div className="flex items-center w-full gap-x-2">
            <Button
                size="lg"
                className="w-full"
                variant="outline"
                onClick={(e) => {
                    onClick("google")
                }}
            >
                <FcGoogle className="h-5 w-5" />
            </Button>
            <Button
                size="lg"
                className="w-full"
                variant="outline"
                onClick={(e) => {
                    onClick("github")
                }}
            >
                <FaGithub className="h-5 w-5" />
            </Button>
        </div>
    );
};
