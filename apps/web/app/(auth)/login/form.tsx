"use client";

import { Icons } from "@/components/icons";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { loginUserSchema } from "@/lib/validations/auth";
import { zodResolver } from "@hookform/resolvers/zod"
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";
import { useForm } from "react-hook-form"
import * as z from "zod"


interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

type FormData = z.infer<typeof loginUserSchema>

export const Form = ({className, ...props} : UserAuthFormProps) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(loginUserSchema),
  })

  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/home'
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const onSubmit = async (data: FormData) => {
    console.log(data)
    setIsLoading(true)
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email: data.email.toLowerCase(),
        password: data.password,
        callbackUrl
      })

      setIsLoading(false)
      if (!res?.error) {
        router.push(callbackUrl)
      } else {
        setError('Invalid email or password')
      }
    } catch (err: any) {}
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
              type="email"
              autoCapitalize="none"
              autoComplete="email"
              autoCorrect="off"
              disabled={isLoading}
              {...register('email')}
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
              <Label>Forgot Password ?</Label>
            </div>
            <Input
              className="w-full"
              required
              id="password"
              type="password"
              disabled={isLoading}
              {...register('password')}
            />
                 {errors?.password && (
              <p className="px-1 text-xs text-red-600">
                {errors.password.message}
              </p>
            )}
          </div>
          <button className={cn(buttonVariants({variant:  'default'}))} disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Login
          </button>
        </div>
      </form>
    </div>
  );
};
