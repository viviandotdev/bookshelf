"use client"
import { Button, buttonVariants } from '@/components/ui/button';
import { dm_sefif_display } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import React from 'react'
import { useForm } from 'react-hook-form';

interface ImportActionsProps {

}

export const ImportActions: React.FC<ImportActionsProps> = ({ }) => {
    const { register, handleSubmit } = useForm();
    const handleFileUpload = (data) => {
        const file = data.file[0];
        const reader = new FileReader();

        reader.onload = (e) => {
            const contents = e.target?.result;
            // Process the CSV content
            parseCSV(contents);
        };

        reader.readAsText(file);
    };

    const parseCSV = (csvContent) => {
        const lines = csvContent.split('\n');
        const mappings = parseLineWithQuotes(lines[0]); // Extract mappings/headers
        console.log(lines.length)
        for (let i = 1; i < lines.length; i++) {
            const line = lines[i];
            const parsedData = parseLineWithQuotes(line);

            const objectFromCSV = {};
            mappings.forEach((key, index) => {
                objectFromCSV[key] = parsedData[index];
            });

            // add book to database
            // look up book in google books api by isbn
            // add book to database if it does not exist
            // create user book based on this data

            console.log(objectFromCSV);
            // You can further process the objectFromCSV or perform any operations here
        }
    };

    function parseLineWithQuotes(csvContent) {
        const pattern = /(?:,|\r?\n|\r|^)(?:"([^"]*(?:""[^"]*)*)"|([^",\r\n]*))/gi;
        const matches = csvContent.matchAll(pattern);
        const values = [];

        for (const match of matches) {
            const [, quotedValue, unquotedValue] = match;
            const value = quotedValue !== undefined ? quotedValue.replace(/""/g, '"') : unquotedValue;
            values.push(value ? value : '');
        }

        return values;
    }

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
