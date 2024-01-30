import { ExclamationTriangleIcon } from "@radix-ui/react-icons";

interface FormErrorProps {
    message?: string;
};

export const FormError = ({
    message,
}: FormErrorProps) => {
    if (!message) return null;

    return (
        <div className="bg-red-500/15 rounded-md flex items-center justify-center text-sm text-red-500">
            <p >{message}</p>
        </div>
    );
};
