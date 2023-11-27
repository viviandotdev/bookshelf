"use client"
import { Button, buttonVariants } from '@/components/ui/button';
import { dm_sefif_display } from '@/lib/fonts';
import { cleanText, cn } from '@/lib/utils';
import { getBookFromISBN } from '@/modules/book/api/getBookFromISBN';
import useCreateUserBook from '@/modules/book/hooks/use-create-user-book';
import { GoodreadsBook, GoodreadsBookKeys } from '@/types/interfaces';
import { request } from 'http';
import Link from 'next/link';
import React from 'react'
import { useForm } from 'react-hook-form';
import { useUpdateUserBook } from "@/hooks/user-books/mutations";
import { useImportUserBooksMutation } from '@/graphql/graphql';
interface ImportActionsProps {

}


export const ImportActions: React.FC<ImportActionsProps> = ({ }) => {
    const { register, handleSubmit } = useForm();
    const { createUserBook } = useCreateUserBook();
    const { updateUserBook } = useUpdateUserBook();
    const [ImportUserBooks] = useImportUserBooksMutation();

    let requestsCounter = 0;
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
    const parseCSV = async (csvContent: string) => {
        const lines = csvContent.split('\n');
        const mappings = parseLineWithQuotes(lines[0]); // Extract mappings/headers
        for (let i = 1; i < lines.length - 1; i++) {
            const line = lines[i];
            const parsedData = parseLineWithQuotes(line);

            const objectFromCSV: GoodreadsBook = {};
            mappings.forEach((key: GoodreadsBookKeys, index) => {
                if (key == 'ISBN' || key == 'ISBN13') {
                    objectFromCSV[key] = cleanText(parsedData[index]);
                } else {
                    objectFromCSV[key] = parsedData[index];
                }

            });
            // Get isbn
            let isbn = objectFromCSV['ISBN'] && objectFromCSV['ISBN'].length > 0 ? objectFromCSV['ISBN'] : null;
            if (!isbn) {
                isbn = objectFromCSV['ISBN13'] && objectFromCSV['ISBN13'].length > 0 ? objectFromCSV['ISBN13'] : null;
            }

            if (isbn) {
                requestsCounter++;
                const book = await getBookFromISBN(isbn);

                console.log(book)
                if (book) {
                    let shelves: string[] = []; // get shelves
                    if (objectFromCSV['Bookshelves']) {
                        const cleanShelves = objectFromCSV['Bookshelves'].split(',').map(shelf => shelf.trim());
                        const excludedShelves = ['to-read', 'currently-reading', 'read'];
                        shelves = cleanShelves.filter(shelf => !excludedShelves.includes(shelf));
                    }
                    let status;
                    if (objectFromCSV['Exclusive Shelf']) { // get status
                        if (objectFromCSV['Exclusive Shelf'] == 'to-read') {
                            status = 'Want to Read'
                        } else if (objectFromCSV['Exclusive Shelf'] == 'currently-reading') {
                            status = 'Currently Reading'
                        } else if (objectFromCSV['Exclusive Shelf'] == 'read') {
                            status = 'Read'
                        }
                    }

                    let rating; // get rating
                    if (objectFromCSV['My Rating']) {
                        rating = objectFromCSV['My Rating'];
                    }

                    await createUserBook(book);
                    await updateUserBook(book!.id, { rating: Number(rating), status, shelves });

                }
            } else {
                // Could not import invalid isbn
            }
        }
    };

    function parseLineWithQuotes(csvContent: string) {
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
