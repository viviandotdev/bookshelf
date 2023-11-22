"use client"
import useCreateQueryString from '@/modules/bookshelves/hooks/use-create-query-string';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState, useTransition } from 'react'

interface FieldSelectorProps {
    selectedField: string | string[] | undefined

}

export const FieldSelector: React.FC<FieldSelectorProps> = ({
    selectedField
}) => {
    const [field, setField] = useState(selectedField);
    const router = useRouter();
    const createQueryString = useCreateQueryString();
    const pathname = usePathname()
    const [isPending, startTransition] = useTransition()
    const fieldSelections = ["Title", "Author", "Categories"];

    function selection(title: string) {
        const isSelected = title.toLowerCase() === field;

        return (
            <div
                key={title}
                className={`text-xs ${isSelected ? 'bg-secondary' : ''} w-[fill-available] rounded-lg p-2 cursor-pointer`}
                onClick={() => {
                    startTransition(() => {
                        router.push(
                            `${pathname}?${createQueryString({
                                field: title.toLowerCase(),
                            })}`,
                        )
                    })
                    setField(title.toLowerCase())
                }}
            >
                {title}
            </div>
        );
    }

    return (
        <div className="hidden xl:block">
            <div className="w-full justify-between mt-8 rounded-lg flex flex-col text-sm gap-1 text-muted-foreground font-light">
                <div className="leading-7 items-start text-primary font-semibold ">
                    Field to search
                </div>
                <hr className="mt-1 border-t-1 border-primary" />
                {fieldSelections.map((heading) => {
                    return selection(heading);
                })}
            </div>
        </div>
    );
}
export default FieldSelector
