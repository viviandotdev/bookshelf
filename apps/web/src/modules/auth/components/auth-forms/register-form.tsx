'use client';
import { useState, useTransition, useEffect } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { registerUserSchema } from '@/schemas/auth';
import { regsiterUser } from '../../actions/register-user';
import { AuthFormWrapper } from '../auth-form-wrapper';
import { AuthInput } from '../auth-input';
import { getLoginOptions } from '../../actions/get-login-options';
import { DEFAULT_LOGIN_REDIRECT } from '@/routes';
import { useSearchParams, usePathname } from 'next/navigation';
import { loginUser } from '../../actions/login-user';
import { forgotPassword } from '../../actions/forgot-password';
import { dm_sefif_display } from '@/lib/fonts';
import { cn } from '@/lib/utils';

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> { }

type FormStep = 'email' | 'password' | 'code' | 'forgot-password';


const redirectTo = (url: string) => {
    window.location.href = url
    // If url contains a hash, the browser does not reload the page. We reload manually
    if (url.includes("#")) window.location.reload()
}

export const RegisterForm = ({ }: UserAuthFormProps) => {
    const [formStep, setFormStep] = useState<FormStep>('email');
    const [email, setEmail] = useState<string>('');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<z.infer<typeof registerUserSchema>>({
        resolver: zodResolver(registerUserSchema),
    });
    const [error, setError] = useState<string | undefined>('');
    const [success, setSuccess] = useState<string | undefined>('');
    const [isPending, startTransition] = useTransition();
    const searchParams = useSearchParams();
    const pathname = usePathname();
    const callbackUrl = searchParams.get('callbackUrl');
    useEffect(() => {
        handleResetError();
    }, [formStep]);

    const handleResetError = () => {
        if (error) {
            setError('');
        }
    }
    // Reset form step when there is invalid email
    useEffect(() => {
        if (formStep !== 'email' && formStep !== 'forgot-password' && errors.email) {
            setFormStep('email');
        }
    }, [errors.email, formStep]);

    const handleEmailSubmit = async (values: z.infer<typeof registerUserSchema>) => {
        setError('');
        setSuccess('');
        setEmail(values.email);

        startTransition(async () => {
            const result = await getLoginOptions({ email: values.email });
            if (result.error) {
                setError(result.error);
                return;
            }

            if (result.passwordSignIn) {
                setFormStep('password');
            } else {
                setFormStep('code');
            }
        });
    };

    const handlePasswordSubmit = async (values: z.infer<typeof registerUserSchema>) => {
        setError('');
        startTransition(() => {
            loginUser({ email: values.email, password: values.password }).then((data) => {
                if (data.error) {
                    setError(data.error);
                } else {
                    redirectTo(callbackUrl || DEFAULT_LOGIN_REDIRECT)
                }
            });

        });
    };

    const handleCodeSubmit = async (values: z.infer<typeof registerUserSchema>) => {
        setError('');
        setSuccess('');

        startTransition(() => {
            regsiterUser({ ...values, email }).then((data) => {
                setError(data.error);
                setSuccess(data.success);
            });
        });
    };

    const handleForgotPasswordSubmit = async (values: z.infer<typeof registerUserSchema>) => {
        setError('');
        setSuccess('');
        startTransition(() => {
            forgotPassword(values).then((data) => {
                setError(data?.error);
                setSuccess(data?.success);
            });
        });

    };

    const getSubmitHandler = () => {
        switch (formStep) {
            case 'email':
                return handleEmailSubmit;
            case 'password':
                return handlePasswordSubmit;
            case 'code':
                return handleCodeSubmit;
            case 'forgot-password':
                return handleForgotPasswordSubmit;
            default:
                return handleEmailSubmit;
        }
    };

    const getTitleHandler = () => {
        switch (formStep) {
            case 'forgot-password':
                return 'Forgot password?';
            default:
                return pathname === '/login' ? 'Login' : 'Create Account';
        }
    }
    const getButtonLabelHandler = () => {
        switch (formStep) {
            case 'forgot-password':
                return 'Send reset link';
            case 'password':
                return 'Continue with password';
            default:
                return 'Continue'
        }
    }

    return (
        <div className='mx-auto flex w-full flex-col justify-center space-y-6 sm:w-[350px]'>
            <div className='flex flex-col space-y-2 text-center'>
                <h1
                    className={cn(
                        dm_sefif_display.className,
                        'text-3xl/[64px] text-beige',
                        getTitleHandler() === 'Login' && 'text-5xl/[64px] font-bold'
                    )}
                >
                    {getTitleHandler()}
                </h1>
            </div>
            <div className='grid gap-4'>
                <hr />
                <AuthFormWrapper
                    onSubmit={handleSubmit(getSubmitHandler())}
                    isPending={isPending}
                    error={error}
                    success={success}
                    buttonLabel={getButtonLabelHandler()}
                >
                    <AuthInput
                        id='email'
                        label='Email Address'
                        type='email'
                        placeholder='Enter your email'
                        error={errors?.email?.message}
                        disabled={isPending}
                        register={register}
                        autoCapitalize='none'
                        autoComplete='email'
                        autoCorrect='off'
                    />

                    {formStep === 'password' && (
                        <>
                            <AuthInput
                                id='password'
                                label='Password'
                                type='password'
                                placeholder='******'
                                error={errors?.password?.message}
                                disabled={isPending}
                                register={register}
                                required
                            />
                            <button
                                type="button"
                                onClick={() => setFormStep('forgot-password')}
                                className="text-sm text-blue-600 hover:text-blue-800 text-left w-full mt-2"
                            >
                                Forgot password?
                            </button>
                        </>
                    )}

                    {formStep === 'code' && (
                        <AuthInput
                            id='code'
                            label='Verification Code'
                            type='text'
                            placeholder='Enter verification code'
                            error={errors?.code?.message}
                            disabled={isPending}
                            register={register}
                            required
                        />
                    )}
                </AuthFormWrapper>
            </div>
        </div>

    );
};
