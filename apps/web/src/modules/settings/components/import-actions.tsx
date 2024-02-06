"use client"
import { Button, buttonVariants } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import UploadFileDialog from './upload-file-dialog';
interface ImportActionsProps {

}

export const ImportActions: React.FC<ImportActionsProps> = ({ }) => {


    return (
        <>
            <div className="flex flex-col gap-6 mt-12" >
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
                        <UploadFileDialog actionLabel={"Import"} className="justify-start pl-6 w-[400px]" buttonLabel={'Upload a File'} />
                        <p className="px-1 py-1 text-sm text-beige">
                            Upload the file downloaded from step 1
                        </p>
                    </div>
                </div>
            </div >
        </>
    );
}
export default ImportActions
