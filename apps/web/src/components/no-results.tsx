import React from 'react';

interface NoResultsProps {
  message?: string;
}

export const NoResults: React.FC<NoResultsProps> = ({ message }) => {
  return (
    <div className='flex flex-col items-center justify-center space-y-2 py-6'>
      <div className='w-full max-w-xs border-2 border-t border-gray-100' />
      <p className='text-lg text-gray-400'>
        {message ? message : 'nothing to see right now'}
      </p>
    </div>
  );
};
export default NoResults;
