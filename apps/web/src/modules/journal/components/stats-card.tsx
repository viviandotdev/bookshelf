import { FunctionComponent } from 'react';
import { Icons } from "@/components/icons";

// Define the props the component accepts using an interface
interface StatCardProps {
    title: string;
    info: string;
    trend: string;
    count: string;
    trendPercentage: number;
}

// Define the component with the type of its props.
export const StatCard: FunctionComponent<StatCardProps> = ({
    title,
    info,
    trend,
    trendPercentage,
    count,
}) => (
    <div className='flex flex-col justify-between gap-1 rounded-lg bg-beige-100 p-4'>
        <div className='flex items-center justify-between'>
            <p className='text-base text-beige-700'>
                {title}
            </p>
            <div className='flex items-center align-middle text-sm font-semibold text-beige'>
                <div className="bg-white px-2 rounded-md text-center mr-2">
                    <Icons.trendingUp className='h-4 w-4 text-beige' />
                </div>

                {trend} ({trendPercentage}%)
            </div>
        </div>
        <p className='text-4xl font-semibold text-beige-700'>{count}</p>
        <p className='text-sm text-gray-500'>{info}</p>
    </div>
);
