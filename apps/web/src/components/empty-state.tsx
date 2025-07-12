import { cn } from "@/lib/utils";
import { type ReactNode, memo } from "react";
import { Card } from "./ui/card";

interface EmptyStateProps {
    hideCard?: boolean;
    icon?: ReactNode;
    message: ReactNode;
    className?: string;
}

const EmptyState = ({
    hideCard = false,
    icon,
    message,
    className = ""
}: EmptyStateProps) => {
    return (
        <Card
            className={cn(
                { "!bg-transparent !shadow-none !border-0": hideCard },
                className
            )}
        >
            <div className="grid text-gray-500 justify-items-center space-y-2 p-5">
                {icon && <div>{icon}</div>}
                <div>{message}</div>
            </div>
        </Card>
    );
};

export default memo(EmptyState);
