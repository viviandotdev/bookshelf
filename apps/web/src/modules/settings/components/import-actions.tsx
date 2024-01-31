"use client"
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useImportUserBooksMutation } from '@/graphql/graphql';
interface ImportActionsProps {

}

export const ImportActions: React.FC<ImportActionsProps> = ({ }) => {
    const { register, handleSubmit } = useForm();
    const [ImportUserBooks] = useImportUserBooksMutation();

    const handleFileUpload = (data: any) => {
        const file = data.file[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const contents = e.target?.result;
            // Process the CSV content
            if (contents) {
                sendCSV(contents as string);
            }
        };
        reader.readAsText(file);
    };
    const sendCSV = async (csvContent: string) => {

        if (csvContent) {
            await ImportUserBooks({ variables: { content: csvContent } });
        }
    };

    return (
        <>
            <form className="flex flex-col gap-6 mt-12" onSubmit={handleSubmit(handleFileUpload)}>
                <div className="flex justify-between bg-white rounded-md shadow-sm border border-gray-100 p-6 mb-4 text-sm">

                    <h1 className="text-lg font-bold"> 1. Export Library</h1>
                    <div className="flex flex-col items-end">
                        <div className="justify-end">
                            <Link
                                target='_blank'
                                href={"https://www.goodreads.com/review/import"}
                                className={cn(
                                    buttonVariants({ variant: "secondary" }),
                                    "justify-start pl-6 w-[400px] "
                                )}
                            >
                                Export Goodreads Library
                            </Link>

                        </div>
                        <p className="px-1 py-1 text-sm text-beige">
                            Download your data from the Goodreads Export page
                        </p>

                    </div>

                </div>

                <div className="flex justify-between bg-white rounded-md shadow-sm border border-gray-100 p-6 mb-4 text-sm">
                    <h1 className="text-lg font-bold"> 2. Upload CSV File</h1>
                    <div className="flex flex-col items-end">

                        <div
                            className={cn(
                                buttonVariants({ variant: "secondary" }),
                                "justify-start pl-6 w-[400px]"
                            )}

                        >
                            <input
                                type="file"
                                accept=".csv"
                                {...register('file')}
                            />
                        </div>
                        <p className="px-1 py-1 text-sm text-beige">
                            Upload the file downloaded from step 1
                        </p>
                    </div>
                </div>
                <div className="flex justify-end" style={{ marginTop: '0px' }}>
                    <Button type="submit" variant={"default"} className="py-4 px-8">
                        Import
                    </Button>
                </div>
            </form >
        </>
    );
}
export default ImportActions
