import { ChevronUpIcon } from '@radix-ui/react-icons';
import React, { useState } from 'react';

interface CollapsibleProps {
  title?: string;
  children?: React.ReactNode;
  collapsible?: boolean;
}

const Collapsible: React.FC<CollapsibleProps> = ({
  title,
  children,
  collapsible,
}) => {
  const [isOpen, setIsOpen] = useState(true);

  const handleCollapsibleClick = () => {
    if (collapsible) {
      setIsOpen(!isOpen);
    }
  };
  return (
    <div key={1}>
      <div className=' items-start text-base font-semibold text-beige'>
        <div
          onClick={handleCollapsibleClick}
          className={`group/title ml-2 mr-6 flex flex-1 py-4 pr-2 font-medium transition-all ${
            isOpen ? '[&>svg]:rotate-180 ' : ''
          } cursor-pointer items-center justify-between`}
        >
          {title}
          {collapsible && (
            <ChevronUpIcon className='hidden h-4 w-4 shrink-0 fill-current stroke-beige-700/50 stroke-1 text-beige-700/50 transition-transform duration-300 group-hover/title:block' />
          )}
        </div>
      </div>
      <div
        className={`transition-max-height overflow-hidden duration-700 ease-in-out ${
          isOpen ? 'max-h-screen' : 'max-h-0'
        }`}
      >
        <div>{children}</div>
      </div>
    </div>
  );
};

export default Collapsible;
