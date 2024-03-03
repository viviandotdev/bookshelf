import { Icons } from "@/components/icons";

export const StatCard = ({ trend, trendPercentage, totalCount, comparisonCount }) => (
    <div className='flex flex-col justify-between gap-1 rounded-lg bg-beige-100 p-4'>
        <div className='flex items-center justify-between'>
            <p className='text-base text-beige-700'>
                Total pages read today
            </p>
            <div className='flex items-center align-middle text-sm font-semibold text-green-500'>
                <Icons.trendingUp className='mr-1 h-4 w-4 text-green-500' />
                {trend} ({trendPercentage}%)
            </div>
        </div>
        <p className='text-4xl font-semibold text-beige-700'>{totalCount} pages</p>
        <p className='text-sm text-gray-500'>Compare to {comparisonCount} yesterday</p>
    </div>

);
