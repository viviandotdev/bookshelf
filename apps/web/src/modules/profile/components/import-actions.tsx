"use client"
import { Button, buttonVariants } from '@/components/ui/button';
import { dm_sefif_display } from '@/lib/fonts';
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
            <form className="flex flex-col gap-12 mt-12" onSubmit={handleSubmit(handleFileUpload)}>
                <div className="flex justify-between gap-20">
                    <div className={cn(dm_sefif_display.className, "text-xl")}>
                        1. Export Goodreads Library
                    </div>
                    <div>
                        <Link target="_blank"
                            href={"https://www.goodreads.com/review/import"} className={cn(
                                buttonVariants({ variant: "default" }),
                                "justify-start pl-6 w-[400px] py-6 text-white"
                            )}>
                            Export Goodreads Library
                        </Link>
                        <p className="px-1 py-1 text-sm text-primary">
                            Download your data from the Goodreads Export page
                        </p>

                    </div>
                </div>
                <hr className="border-t border-gray-300" /> {/* HR line */}
                <div className="flex justify-between">
                    <div className={cn(dm_sefif_display.className, "text-xl")}>
                        2. Upload CSV Files
                    </div>
                    <div>
                        <div
                            className={cn(
                                buttonVariants({ variant: "outline" }),
                                "justify-start pl-6 w-[400px] py-6 border font-medium text-primary"
                            )}

                        >
                            <input
                                type="file"
                                accept=".csv"
                                {...register('file')}
                            />
                        </div>
                        <p className="px-1 py-1 text-sm text-primary">
                            Upload the file downloaded from step 1
                        </p>
                    </div>
                </div>
                <hr className="border-t border-gray-300 " /> {/* HR line */}
                <div className="flex justify-end" style={{ marginTop: '0px' }}>
                    <Button type="submit" className="py-4 px-8"> {/* Adjust the width as needed */}
                        Import
                    </Button>
                </div>
            </form >
        </>
    );
}
export default ImportActions
