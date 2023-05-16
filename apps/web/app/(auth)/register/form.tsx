'use client'

import { Alert } from '@/components/ui/alert'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { signIn } from 'next-auth/react'
import { useState } from 'react'
import { useSignUpMutation } from '@/graphql/graphql'
import { useRouter, useSearchParams } from 'next/navigation'

export const RegisterForm = () => {
  const router = useRouter()
  const [email, setEmail] = useState('')
  const searchParams = useSearchParams()
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState<string | null>(null)
  const callbackUrl = searchParams.get('callbackUrl') || '/dashboard'
  const [signup] = useSignUpMutation()
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

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
        router.push(callbackUrl)
      } else {
        setError((await errors[0].message) as string)
      }
    } catch (error: any) {
      setError(error?.message)
    }
  }

  return (
    <form onSubmit={onSubmit} className='space-y-12 w-full sm:w-[400px]'>
      <div className='grid w-full items-center gap-1.5'>
        <Label htmlFor='email'>Email</Label>
        <Input
          className='w-full'
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id='email'
          type='email'
        />
      </div>
      <div className='grid w-full items-center gap-1.5'>
        <Label htmlFor='username'>Username</Label>
        <Input
          className='w-full'
          required
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          id='username'
          type='username'
        />
      </div>
      <div className='grid w-full items-center gap-1.5'>
        <Label htmlFor='password'>Password</Label>
        <Input
          className='w-full'
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          id='password'
          type='password'
        />
      </div>
      {error && <Alert>{error}</Alert>}
      <div className='w-full'>
        <Button className='w-full' size='lg'>
          Register
        </Button>
      </div>
    </form>
  )
}
