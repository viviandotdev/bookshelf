import { ExclamationTriangleIcon } from "@radix-ui/react-icons";
import {
    Card,
    CardContent,
    CardFooter,
    CardHeader
} from "@/components/ui/card";
import { BackButton } from "@/modules/auth/components/back-button";

const AuthErrorPage = () => {
    return (
        <Card className="w-[400px] shadow-md">
            <CardHeader>
                "Oops! Something went wrong"
            </CardHeader>
            <CardContent>
                <div className="w-full flex justify-center items-center">
                    <ExclamationTriangleIcon className="text-destructive" />
                </div>
            </CardContent>
            <CardFooter>
                <BackButton
                    label={'Back to login'}
                    href={'/auth/login'}
                />
            </CardFooter>
        </Card>
    );
};

export default AuthErrorPage;
