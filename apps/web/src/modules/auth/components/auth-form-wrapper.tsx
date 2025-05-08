import { cn } from '@/lib/utils';
import { buttonVariants } from '@/components/ui/button';
import { Icons } from '@/components/icons';
import { FormError } from '@/components/form-error';
import { FormSuccess } from '@/components/form-success';

export function AuthFormWrapper({
    onSubmit,
    children,
    isPending,
    error,
    success,
    buttonLabel,
    className,
}: {
    onSubmit: (e: React.FormEvent) => void;
    children: React.ReactNode;
    isPending: boolean;
    error?: string;
    success?: string;
    buttonLabel: string;
    className?: string;
}) {
    return (
        <form onSubmit={onSubmit} className={className}>
            <div className="grid gap-6">
                {children}
                {error && <FormError message={error} />}
                {success && <FormSuccess message={success} />}
                <button
                    className={cn(buttonVariants({ variant: 'default' }))}
                    disabled={isPending}
                >
                    {isPending && <Icons.spinner className="mr-2 h-4 w-4 animate-spin" />}
                    {buttonLabel}
                </button>
            </div>
        </form>
    );
}
