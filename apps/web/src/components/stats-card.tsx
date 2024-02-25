import React from 'react'
import { Card, CardContent } from "@/components/ui/card";
interface StatsCardProps {
    value: number;
    title: string;
}

export const StatsCard: React.FC<StatsCardProps> = ({
    value,
    title
}) => {
    return (
        <Card className="bg-white ">
            <CardContent className="px-4 py-2 min-w-36">
                <div className="text-2xl font-medium mb-0.5 ">{value}</div>
                <div className="text-xs text-beige-700 font-medium">{title}</div>
            </CardContent>
        </Card>
    );
}
export default StatsCard
