import { Icons } from "@/components/icons";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "lucide-react";

interface AuthLayoutProps {
    children: React.ReactNode;
}

export default function AuthLayout({ children }: AuthLayoutProps) {
    return <div className='min-h-screen'>
        <div className='container flex h-screen w-screen flex-col items-center justify-center'>
            <Link
                href='/'
                className={cn(
                    buttonVariants({ variant: 'link' }),
                    'absolute left-4 top-4 md:left-8 md:top-8'
                )}
            >
                <>
                    <Icons.chevronLeft className='mr-2 h-4 w-4' />
                    Back
                </>
            </Link>
            <div className='mx-auto flex w-full flex-col justify-center space-y-6'>
                {children}
            </div>
        </div>


    </div>;
}
