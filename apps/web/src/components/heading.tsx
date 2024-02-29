import { dm_sefif_display } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'

interface HeadingProps {
    title?: string;
    subTitle?: string;
    href?: string
}

export const Heading: React.FC<HeadingProps> = ({ subTitle, title, href }) => {
    function renderTitle(title?: string, id?: string) {
        if (href) {
            return (
                <Link href={href} className="text-beige hover:text-stone-500">
                    {title}
                </Link>
            );
        }
        return (
            <div className="text-beige">
                {title}
            </div>
        );
    }
    return (
        <>
            <h3
                className={cn(dm_sefif_display.className, 'text-2xl text-gray-400')}
            >
                {subTitle}
            </h3>
            <h1
                className={cn(
                    dm_sefif_display.className,
                    'mb-6 text-4xl font-bold text-beige-700'
                )}
            >
                {renderTitle(title, href)}
            </h1></>
    );
}
export default Heading
