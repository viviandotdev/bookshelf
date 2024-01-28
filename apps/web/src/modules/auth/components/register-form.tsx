"use client";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState, useTransition } from "react";
import { useSearchParams } from "next/navigation";
import { Icons } from "@/components/icons";
import { cn } from "@/lib/utils";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { registerUserSchema } from "@/schemas/auth";
import { register } from "../actions/register";
import { FormSuccess } from "@/components/form-success";
import { FormError } from "@/components/form-error";
interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

type FormData = z.infer<typeof registerUserSchema>;

export const RegisterForm = ({ className, ...props }: UserAuthFormProps) => {
    const {
        register: registerForm,
        handleSubmit,
        formState: { errors },
    } = useForm<FormData>({
        resolver: zodResolver(registerUserSchema),
    });
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string | undefined>("");
    const [success, setSuccess] = useState<string | undefined>("");
    const [isPending, startTransition] = useTransition();

    const onSubmit = async (values: z.infer<typeof registerUserSchema>) => {
       startTransition(() => {
            register(values)
                .then((data) => {
                    setError(data.error);
                    setSuccess(data.success);
                });
        });
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
                            {...registerForm("email")}
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
                            {...registerForm("username")}
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
                            {...registerForm("password")}
                        />
                        {errors?.password && (
                            <p className="px-1 text-xs text-red-600">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <FormSuccess message={success} />
                    <FormError message={error} />
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
