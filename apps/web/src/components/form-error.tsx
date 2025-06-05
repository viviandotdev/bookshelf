
interface FormErrorProps {
    message?: string;
}

export const FormError = ({ message }: FormErrorProps) => {
    if (!message) return null;

    return (
        <div className=' py-4 flex items-center justify-center rounded-md text-sm text-red-500'>
            <p>{message}</p>
        </div>
    );
};
