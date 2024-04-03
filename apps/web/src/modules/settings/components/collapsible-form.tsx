// CollapsibleForm.tsx
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react';

interface CollapsibleFormProps {
  label: string;
  value: string;
  isLastSection?: boolean;
  isOpen: boolean;
  onToggle: () => void;
}

export const CollapsibleForm: React.FC<CollapsibleFormProps> = ({
  label,
  value,
  isLastSection,
  isOpen,
  onToggle,
}) => {
  const textColor = value ? 'text-black' : 'text-gray-400';

  return (
    <div>
      <div className=' justify-between text-base text-beige'>
        <div
          onClick={onToggle}
          className={`transition-all ${
            isOpen ? 'bg-beige-50' : ''
          } cursor-pointer items-center justify-between`}
        >
          <div className='cursor-pointer rounded-t-md hover:bg-beige-50'>
            <div className={`flex justify-between px-4 py-3 text-black`}>
              <div className='text-sm font-normal text-gray-400'>{label}</div>
              <div
                className={`duration-[50ms] transform text-sm ${textColor} transition-all ease-in-out ${
                  isOpen
                    ? '-translate-x-2 translate-y-2 opacity-0'
                    : 'translate-x-0 translate-y-0 opacity-100'
                }`}
              >
                {!value ? '+ Add' : value}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`transition-max-height overflow-hidden duration-300 ease-in-out ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div className='grid gap-1 text-sm'>
          <div className='cursor-pointer rounded-b bg-beige-50'>
            <div className='px-4 py-3'>
              {label == 'Bio' ? (
                <Textarea />
              ) : (
                <Input value={value || ''} className='bg-white' />
              )}
            </div>
            <div className='flex justify-end gap-2 px-4 py-3'>
              <Button
                onClick={onToggle}
                className='border border-beige-100 bg-white text-black hover:bg-white hover:text-black'
              >
                Cancel
              </Button>
              <Button variant={'secondary'}>Save</Button>
            </div>
          </div>
        </div>
      </div>
      {isLastSection ? null : <hr className='mx-2 border-gray-100' />}
    </div>
  );
};

export default CollapsibleForm;
