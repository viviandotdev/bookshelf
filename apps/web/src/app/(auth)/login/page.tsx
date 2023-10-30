import Link from "next/link";
import { Form as LoginForm } from "./form";
import { Metadata } from "next";
import { Icons } from "@/src/components/icons";
import { buttonVariants } from "@/src/components/ui/button";
import { cn } from "@/src/lib/utils";
import { dm_sefif_display } from "@/src/lib/fonts";

export const metadata: Metadata = {
  title: "Login",
  description: "Login to your account",
};

export default function LoginPage() {
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
            Login
          </h1>
        </div>
        <LoginForm />
        <p className="px-8 text-center text-sm text-primary">
          <Link
            href="/register"
            className="font-medium hover:text-brand underline underline-offset-4"
          >
            Don&apos;t have an account? Create One
          </Link>
        </p>
      </div>
    </div>
  );
}
