import React from 'react';
import ImportActions from './import-actions';

interface ImportFormProps { }

export const ImportForm: React.FC<ImportFormProps> = ({ }) => {
    return (
        <main className='px-4 py-16 sm:px-6 lg:flex-auto lg:px-0 lg:py-20'>
            <div className='mx-auto max-w-2xl lg:mx-0 lg:max-w-none'>
                <div>
                    <h1 className='text-2xl font-bold'> Goodreads Import</h1>
                    <p className='mb-6 mt-1 text-sm text-gray-600'>
                        Import of all your Goodreads books, shelves, rating, and reviews
                    </p>
                    <div className='mx-auto'>
                        <ImportActions />
                    </div>
                </div>
            </div>
        </main>
    );
};
export default ImportForm;
