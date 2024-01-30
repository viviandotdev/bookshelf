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
        <div >
            < div className="flex items-center w-full mb-4" >
                <Button
                    size="lg"
                    className="w-full h-10 border-2 border-beige bg-white"
                    variant="outline"
                    onClick={(e) => {
                        onClick("google")
                    }}
                >
                    <FcGoogle className="h-5 w-5 mr-2" /> Continue with Google
                </Button>

            </ div>

            <div className="flex items-center w-full">
                <Button
                    size="lg"
                    className="w-full h-10 border-beige bg-white"
                    variant="outline"
                    onClick={(e) => {
                        onClick("github")
                    }}
                >
                    <FaGithub className="h-5 w-5 mr-2" /> Continue with Github
                </Button>

            </div>
        </div >
    );
};
