import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

export function AuthInput({
    id,
    label,
    type = 'text',
    error,
    disabled,
    register,
    placeholder,
    ...props
}: {
    id: string;
    label: string;
    type?: string;
    error?: string;
    disabled?: boolean;
    register: any;
    placeholder?: string;
    [key: string]: any;
}) {
    return (
        <div className="grid gap-2">
            <Label htmlFor={id}>{label}</Label>
            <Input
                className="w-full"
                id={id}
                type={type}
                placeholder={placeholder}
                disabled={disabled}
                {...register(id)}
                {...props}
            />
            {error && <p className="px-1 text-xs text-red-600">{error}</p>}
        </div>
    );
}
