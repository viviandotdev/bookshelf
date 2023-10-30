import Link from "next/link";

import { cn } from "@/lib/utils";
import { buttonVariants } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { RegisterForm } from "./form";
import { dm_sefif_display } from "@/lib/fonts";

export const metadata = {
    title: "Create an account",
    description: "Create an account to get started.",
};

export default function RegisterPage() {
    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <Link
                href="/"
                className={cn(
                    buttonVariants({ variant: "ghost" }),
                    "absolute left-4 top-4 md:left-8 md:top-8"
                )}
            >
                <>
                    <Icons.chevronLeft className="mr-2 h-4 w-4" />
                    Back
                </>
            </Link>
            <div className="mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]">
                <div className="flex flex-col space-y-2 text-center">
                    <h1
                        className={cn(
                            dm_sefif_display.className,
                            "text-primary text-3xl/[64px] "
                        )}
                    >
                        Create Account
                    </h1>
                </div>
                <RegisterForm />
                <p className="px-8 text-center text-sm text-primary">
                    <Link
                        href="/login"
                        className="font-medium hover:text-brand underline underline-offset-4"
                    >
                        Already have an account? Sign In
                    </Link>
                </p>
            </div>
        </div>
    );
}
