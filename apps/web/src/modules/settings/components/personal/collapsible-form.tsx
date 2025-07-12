'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { motion, AnimatePresence } from 'motion/react';
import { Icons } from '@/components/icons';
import { Button } from '@/components/ui/button';

interface FormContainerProps {
    label: string;
    value: string;
    isOpen: boolean;
    onToggleForm: () => void;
    onCancel: () => void;
    onSubmit: () => void;
    isPending: boolean;
    hasError: boolean;
    children: React.ReactNode;
}

export const FormContainer: React.FC<FormContainerProps> = ({
    label,
    value,
    isOpen,
    onToggleForm,
    onCancel,
    onSubmit,
    isPending,
    hasError,
    children,
}) => {
    return (
        <div className='relative'>
            <div
                onClick={onToggleForm}
                className={cn(
                    'group cursor-pointer transition-colors duration-200',
                    isOpen ? 'bg-beige-50' : 'hover:bg-beige-50/50'
                )}
            >
                <div className='flex items-center justify-between px-4 py-3'>
                    <span className='min-w-20 text-sm font-normal text-gray-400'>
                        {label}
                    </span>
                    <motion.span
                        className={cn(
                            'text-sm',
                            value ? 'text-black' : 'text-gray-400'
                        )}
                        animate={{
                            opacity: isOpen ? 0 : 1,
                            y: isOpen ? 8 : 0
                        }}
                        transition={{
                            duration: 0.2,
                            ease: "easeInOut"
                        }}
                    >
                        {value || '+ Add'}
                    </motion.span>
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{
                            duration: 0.3,
                            ease: "easeInOut"
                        }}
                        className='overflow-hidden'
                    >
                        <div className='bg-beige-50 border-b border-s rounded-b-md border-gray-200'>
                            <div className='px-4'>
                                {children}
                                <div className='flex justify-end gap-2 py-3'>
                                    <Button
                                        type='button'
                                        onClick={onCancel}
                                        className='border border-beige-100 bg-white text-black hover:bg-white hover:text-black'
                                    >
                                        Cancel
                                    </Button>
                                    <Button
                                        type='button'
                                        onClick={onSubmit}
                                        disabled={hasError || isPending}
                                        variant='secondary'
                                    >
                                        {isPending ? (
                                            <>
                                                <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />
                                            </>
                                        ) : (
                                            'Save'
                                        )}
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
};

export default FormContainer;
