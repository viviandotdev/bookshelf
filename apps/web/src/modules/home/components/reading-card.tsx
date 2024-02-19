import { Icons } from '@/components/icons';
import { Card, CardContent } from '@/components/ui/card';
import React from 'react'

interface ReadingCardProps {

}

export const ReadingCard: React.FC<ReadingCardProps> = ({ }) => {
    return (
        <Card className="w-full min-w-76">
            <CardContent className="p-2.5 shadow-md">
                <div className="flex space-x-4">
                    <div
                        className="h-[71px] w-[54px] bg-gray-200"
                        style={{
                            aspectRatio: "40/100",
                            objectFit: "cover",
                        }} />
                    <div className="flex flex-col justify-between">
                        <div>
                            <h3 className="text-base font-medium text-gray-900">Playing  well with Others</h3>
                            <p className="text-sm text-gray-600">Eric Barker</p>
                        </div>
                        <p className="flex items-center text-sm text-gray-500 gap-1.5">
                            <Icons.read className="h-4 w-4 text-gray-400" />
                            Finished
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
export default ReadingCard
