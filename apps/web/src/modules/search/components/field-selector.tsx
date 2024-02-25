'use client';
import useCreateQueryString from '@/modules/bookshelves/hooks/use-create-query-string';
import { usePathname, useRouter } from 'next/navigation';
import React, { useState, useTransition } from 'react';

interface FieldSelectorProps {
  selectedField: string | string[] | undefined;
}

export const FieldSelector: React.FC<FieldSelectorProps> = ({
  selectedField,
}) => {
  const [field, setField] = useState(selectedField);
  const router = useRouter();
  const createQueryString = useCreateQueryString();
  const pathname = usePathname();
  const [isPending, startTransition] = useTransition();
  const fieldSelections = ['Title', 'Author', 'Categories'];

  function selection(title: string) {
    const isSelected = title.toLowerCase() === field;

    return (
      <div
        key={title}
        className={`text-xs ${isSelected ? 'bg-beige-100' : ''} w-[fill-available] cursor-pointer rounded-lg p-2`}
        onClick={() => {
          startTransition(() => {
            router.push(
              `${pathname}?${createQueryString({
                field: title.toLowerCase(),
              })}`
            );
          });
          setField(title.toLowerCase());
        }}
      >
        {title}
      </div>
    );
  }

  return (
    <div className='hidden xl:block'>
      <div className='mt-8 flex w-full flex-col justify-between gap-1 rounded-lg text-sm font-light text-gray-500'>
        <div className='items-start font-semibold leading-7 text-beige '>
          Field to search
        </div>
        <hr className='border-t-1 mt-1 border-beige' />
        {fieldSelections.map((heading) => {
          return selection(heading);
        })}
      </div>
    </div>
  );
};
export default FieldSelector;
