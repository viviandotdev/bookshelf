import Link from "next/link";
import { Button, buttonVariants } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";

const NotLoggedIn = () => {
    return (
        <div className="container flex h-screen w-screen flex-col items-center justify-center">
            <Card className="w-[400px] shadow-md">
                <CardHeader>
                    <h1 className="text-2xl font-semibold text-center">Not logged in!</h1>
                </CardHeader>
                <CardContent className="flex flex-col items-center gap-4">
                    <p className="text-gray-500">Log in to continue</p>
                    <div className="flex gap-4">
                        <Link
                            href="/login"
                            className={cn(
                                buttonVariants({ variant: 'secondary', size: 'sm' }),
                                'px-4 py-2'
                            )}
                        >
                            Login
                        </Link>
                        <Link
                            href="/register"
                            className={cn(
                                buttonVariants({ variant: 'default', size: 'sm' }),
                                'px-4 py-2'
                            )}
                        >
                            Sign up
                        </Link>
                    </div>
                </CardContent>
            </Card>
        </div>
    );
};

export default NotLoggedIn;
