interface FormSuccessProps {
    message?: string;
}

export const FormSuccess = ({ message }: FormSuccessProps) => {
    if (!message) return null;

    return (
        <div className='bg-emerald-500/15 flex items-center justify-center rounded-md text-sm text-emerald-500'>
            <p className='px-5 text-center'>{message}</p>
        </div>
    );
};
