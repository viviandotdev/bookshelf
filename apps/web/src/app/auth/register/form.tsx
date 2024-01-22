"use client";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useSignUpMutation } from "@/graphql/graphql";
import { useRouter, useSearchParams } from "next/navigation";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { registerUserSchema } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { toast } from "@/hooks/use-toast";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

type FormData = z.infer<typeof registerUserSchema>;

export const RegisterForm = ({ className, ...props }: UserAuthFormProps) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(registerUserSchema),
    });
    const router = useRouter();
    const searchParams = useSearchParams();
    const callbackUrl = searchParams.get("callbackUrl") || "/";
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [signup] = useSignUpMutation();
    const onSubmit = async (data: FormData) => {
        setIsLoading(true);
        try {
            const { errors } = await signup({
                variables: {
                    input: {
                        email: data.email.toLowerCase(),
                        password: data.password,
                        username: data.username,
                    },
                },
            });
            if (errors !== undefined) {
                setIsLoading(false);
                toast({
                    title: "Something went wrong.",
                    description: "Your sign up request failed. Please try again.",
                    variant: "destructive",
                });

            } else {
                const res = await signIn("credentials", {
                    redirect: false,
                    email: data.email.toLowerCase(),
                    password: data.password,
                    callbackUrl,
                });
                setIsLoading(false);
                if (!res?.error) {
                    router.push(callbackUrl);
                }
            }
        } catch (error: any) {
            setIsLoading(false);
            toast({
                title: "Something went wrong.",
                description: "Your sign up request failed. Please try again.",
                variant: "destructive",
            });

        }
    };

    return (
        <div className="grid gap-6" {...props}>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid gap-6">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email Address</Label>
                        <Input
                            className="w-full"
                            id="email"
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
                        <Label htmlFor="username">Username</Label>
                        <Input
                            className="w-full"
                            required
                            id="username"
                            variant="rings"
                            type="username"
                            disabled={isLoading}
                            {...register("username")}
                        />
                        {errors?.username && (
                            <p className="px-1 text-xs text-red-600">
                                {errors.username.message}
                            </p>
                        )}
                    </div>
                    <div className="grid gap-2">
                        <div className="flex justify-between">
                            <Label htmlFor="password">Password</Label>
                            <Label>Forgot Password ?</Label>
                        </div>
                        <Input
                            className="w-full"
                            required
                            id="password"
                            type="password"
                            variant="rings"
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
                        Register
                    </button>
                </div>
            </form>
        </div>
    );
};
