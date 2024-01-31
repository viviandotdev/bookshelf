import React from 'react'
import ImportActions from './import-actions';

interface ImportFormProps {

}

export const ImportForm: React.FC<ImportFormProps> = ({ }) => {
    return (
        <main className="flex-1">
            <h1 className="text-2xl font-bold"> Goodreads Import</h1>
            <p className="mt-1 mb-6 text-sm text-gray-600">
                Import of all your Goodreads books, shelves, rating, and reviews
            </p>
            <div className="mx-auto">
                <ImportActions />
            </div>
        </main>
    );
}
export default ImportForm
