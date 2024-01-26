"use client";
import { Icons } from "@/components/icons";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { Social } from "@/modules/auth/components/social";
import { loginUserSchema } from "@/schemas/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form";
import * as z from "zod";
import Link from "next/link";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

type FormData = z.infer<typeof loginUserSchema>;

export const Form = ({ className, ...props }: UserAuthFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(loginUserSchema),
    });

    const router = useRouter();
    const [success, setSuccess] = useState<string | undefined>("");
    const searchParams = useSearchParams();
    const [error, setError] = useState<string | undefined>("");
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const callbackUrl = searchParams.get("callbackUrl") || "/";

    const onSubmit = async (data: FormData) => {

        try {
            const res = await signIn("credentials", {
                email: data.email.toLowerCase(),
                password: data.password,
                callbackUrl,
                redirect: false,
            })

            if (!res?.error) {
                router.push(callbackUrl);
            }

            if (res?.error) {
                setError("Invalid email or password");
                // if user exists but email not verified
                setError("Confirmation email sent")
            }
        } catch (err: any) {
            console.log(err);
            setError("Error signing in");
        } finally {
            setIsLoading(false);
        }
    }


    return (
        <div className="grid gap-6" {...props}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        {error && (
                            <Alert variant={"destructive"}>
                                <AlertDescription>
                                    Incorrect Username or Password
                                </AlertDescription>
                            </Alert>
                        )}
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                            className="w-full"
                            id="email"
                            placeholder="john.doe@example.com"
                            type="email"
                            variant="rings"
                            autoCapitalize="none"
                            autoComplete="email"
                            autoCorrect="off"
                            disabled={isLoading}
                            {...register("email")}
                        />
                        {errors?.email && (
                            <p className="px-1 text-xs text-red-600">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div className="grid gap-2">
                        <div className="flex justify-between">
                            <Label htmlFor="password">Password</Label>
                            <Label>
                                <Link href="/auth/forgot-password">
                                    Forgot password?
                                </Link>
                            </Label>
                        </div>

                        <Input
                            className="w-full"
                            variant="rings"
                            required
                            id="password"
                            placeholder="******"
                            type="password"
                            disabled={isLoading}
                            {...register("password")}
                        />
                        {errors?.password && (
                            <p className="px-1 text-xs text-red-600">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <button
                        className={cn(buttonVariants({ variant: "default" }))}
                        disabled={isLoading}
                    >
                        {isLoading && (
                            <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                        )}
                        Login
                    </button>
                </div>
            </form>
            <Social />
        </div>
    );
};
