import { Icons } from '@/components/icons';
import { dm_sefif_display } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import React from 'react'

interface EditShelfCardProps {

}

export const EditShelfCard: React.FC<EditShelfCardProps> = ({ }) => {
    return (
        <div className="w-full p-2 px-3 flex items-center justify-between border border-black rounded-md">
            <div className="flex items-start space-x-4">
                <img
                    alt="Black Swan book cover"
                    className="h-20 w-14"
                    height="100"
                    src="/placeholder.svg"
                    style={{
                        aspectRatio: "60/100",
                        objectFit: "cover",
                    }}
                    width="60"
                />
                <div className="flex flex-col justify-center">
                    <h2 className={cn(
                        dm_sefif_display.className,
                        'text-2xl font-bold text-beige'
                    )}>Barking up the Wrong Tree</h2>
                    <p className="text-vase text-gray-400">Eric Barker</p>
                </div>
            </div>
            <div className="flex gap-4 items-center">
                <Icons.close className="cursor-pointer w-6 h-6" />
                <Icons.menu className="cursor-pointer w-6 h-6" />
            </div>
        </div>


    );
}
export default EditShelfCard
