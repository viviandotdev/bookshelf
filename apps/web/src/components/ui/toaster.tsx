'use client';

import {
    Toast,
    ToastClose,
    ToastDescription,
    ToastProvider,
    ToastTitle,
    ToastViewport,
} from '@/components/ui/toast';
import { useToast } from '@/hooks/use-toast';
import { CircleCheck, CircleX } from 'lucide-react';
export function Toaster() {
    const { toasts } = useToast();

    return (
        <ToastProvider>
            {toasts.map(function ({ id, title, description, action, variant, ...props }) {
                return (
                    <Toast key={id} {...props}>
                        <div className='grid gap-1'>

                            {title && (
                                <ToastTitle>
                                    <div className="flex items-center w-full">
                                        {variant === 'success' && (
                                            <CircleCheck className="text-green-600 mr-3 w-5 h-5 flex-shrink-0" />
                                        )}
                                        {variant === 'destructive' &&
                                            <CircleX className="text-red-600 mr-3 w-5 h-5 flex-shrink-0" />}
                                        {title}
                                    </div>
                                </ToastTitle>
                            )}
                            {description && (
                                <ToastDescription>{description}</ToastDescription>
                            )}
                        </div>
                        {action}
                        <ToastClose />
                    </Toast>
                );
            })}
            <ToastViewport />
        </ToastProvider>
    );
}
