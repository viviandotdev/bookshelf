'use client';
import React, { useState } from 'react';
import { Social } from '../components/social';
import { LoginForm } from '../components/login-form';
import { ForgotPasswordForm } from '../components/forgot-password-form';
import { Button } from '@/components/ui/button';
import { RegisterForm } from '../components/register-form';

interface LoginTemplateProps {}

export const LoginTemplate: React.FC<LoginTemplateProps> = ({}) => {
  const [activeForm, setActiveForm] = useState<
    'login' | 'register' | 'forgotPassword'
  >('login');

  const handleToggleForm = (form: 'login' | 'register' | 'forgotPassword') => {
    setActiveForm(form);
  };

  return (
    <div className='grid gap-4'>
      {/* <Social /> */}
      <hr />
      {activeForm === 'login' && <LoginForm />}
      {activeForm === 'register' && <RegisterForm />}
      {activeForm === 'forgotPassword' && (
        <>
          <ForgotPasswordForm />
          <p className='px-8 text-center text-sm text-beige'>
            <Button
              onClick={() => handleToggleForm('login')}
              className='hover:text-brand bg-white font-medium text-beige underline underline-offset-4 hover:bg-white'
            >
              {'Cancel'}
            </Button>
          </p>
        </>
      )}
      {activeForm !== 'forgotPassword' && (
        <div className='gap-2'>
          {activeForm === 'login' && (
            <p className='px-8 text-center text-sm text-beige'>
              <Button
                onClick={() => handleToggleForm('forgotPassword')}
                className='hover:text-brand bg-white font-medium text-beige underline underline-offset-4 hover:bg-white'
              >
                {'Forgot password?'}
              </Button>
            </p>
          )}

          <p className='px-8 text-center text-sm text-beige'>
            {activeForm == 'login'
              ? "Don't have an account?"
              : 'Already have an account?'}
            <Button
              onClick={() =>
                handleToggleForm(activeForm === 'login' ? 'register' : 'login')
              }
              className='hover:text-brand bg-white font-medium text-beige underline underline-offset-4 hover:bg-white'
            >
              {activeForm === 'login' ? 'Create one' : 'Log in'}
            </Button>
          </p>
        </div>
      )}
    </div>
  );
};

export default LoginTemplate;
