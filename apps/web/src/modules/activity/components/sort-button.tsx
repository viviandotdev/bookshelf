import React from 'react'

interface SortButtonProps {

}

export const SortButton: React.FC<SortButtonProps> = ({ }) => {
    return (
        <div className='mt-3 flex sm:ml-4 sm:mt-0'>
            <button
                type='button'
                className='inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50'
            >
                Sort
            </button>
        </div>
    );
}
export default SortButton
