'use client'
import { buttonVariants } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useSignUpMutation } from '@/graphql/graphql'
import { useRouter, useSearchParams } from 'next/navigation'
import { toast } from '@/components/ui/use-toast'
import { Icons } from '@/components/icons'
import { cn } from '@/lib/utils'

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {}

export const RegisterForm = ({className, ...props} : UserAuthFormProps) => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [email, setEmail] = useState('')
  const callbackUrl = searchParams.get('callbackUrl') || '/home'
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState<boolean>(false)
  const [signup] = useSignUpMutation()
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    const errorMessage = toast({
      title: "Something went wrong.",
      description:  "Your sign up request failed. Please try again.",
      variant: "destructive"
    }); 
    try {
      const { errors } = await signup({
        variables: {
          input: {
            email,
            password,
            username
          }
        }
      })
      if (!errors) {
        await signIn('credentials', {
          redirect: false,
          email,
          password,
          callbackUrl
        })
        setIsLoading(false)
        router.push(callbackUrl)
      } else {
        setIsLoading(false)
        return errorMessage
      }
    } catch (error: any) {
      setIsLoading(false)
      return errorMessage
    }
  }

  return (
    <div className='grid gap-6' {...props}>
    <form onSubmit={onSubmit}>
      <div className='grid gap-6'>
        <div className='grid gap-2'>
          <Label htmlFor='email'>Email Address</Label>
          <Input
            className='w-full'
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            id='email'
            type='email'
            disabled={isLoading}
          />
        </div>
        <div className='grid gap-2'>
          <Label htmlFor='username'>Username</Label>
          <Input
            className='w-full'
            required
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            id='username'
            type='username'
            disabled={isLoading}
          />
        </div>
        <div className='grid gap-2'>
          <div className='flex justify-between'>
            <Label htmlFor='password'>Password</Label>
            <Label>Forgot Password ?</Label>
          </div>
          <Input
            className='w-full'
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            id='password'
            type='password'
            disabled={isLoading}
          />
        </div>
        <button className={cn(buttonVariants({variant:  'default'}))} disabled={isLoading}>
            {isLoading && (
              <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Register
          </button>
      </div>
    </form>
  </div>
  )
}
