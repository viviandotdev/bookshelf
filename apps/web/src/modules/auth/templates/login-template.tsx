"use client";
import React, { useState } from 'react';
import { Social } from '../components/social';
import { LoginForm } from '../components/login-form';
import { ForgotPasswordForm } from '../components/forgot-password-form';
import { Button } from '@/components/ui/button';

interface LoginTemplateProps { }

export const LoginTemplate: React.FC<LoginTemplateProps> = ({ }) => {
    const [showLoginForm, setShowLoginForm] = useState(true);

    const handleForgotPasswordClick = () => {
        setShowLoginForm(!showLoginForm);
    };

    return (
        <div className="grid gap-4">
            <Social />
            <hr />
            {showLoginForm ? <LoginForm /> : <ForgotPasswordForm />}
            <p className="px-8 text-center text-sm text-primary">
                <Button onClick={handleForgotPasswordClick} className="font-medium hover:text-brand hover:bg-white underline underline-offset-4 bg-white text-primary">
                    {showLoginForm ? "Forgot password?" : "Continue with email?"}
                </Button>
            </p>
        </div>
    );
};

export default LoginTemplate
