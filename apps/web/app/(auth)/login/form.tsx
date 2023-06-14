"use client";

import { Icons } from "@/components/icons";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Form = ({className, ...props} : UserAuthFormProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    try {
      const res = await signIn('credentials', {
        redirect: false,
        email,
        password,
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
      <form onSubmit={onSubmit}>
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
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              id="email"
              type="email"
              autoCorrect="off"
              disabled={isLoading}
            />
          </div>
          <div className="grid gap-2">
            <div className="flex justify-between">
              <Label htmlFor="password">Password</Label>
              <Label>Forgot Password ?</Label>
            </div>
            <Input
              className="w-full"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              id="password"
              type="password"
              disabled={isLoading}
            />
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
