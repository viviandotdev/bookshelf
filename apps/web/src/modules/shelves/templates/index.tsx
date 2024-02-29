import React from 'react'
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Heading } from '@/components/heading';
import ShelfCard from '../components/shelf-card';
interface ShelvesTemplateProps {
    title: string;
    bookId?: string
    description?: string
}

export const ShelvesTemplate: React.FC<ShelvesTemplateProps> = ({ title, bookId, description }) => {
    const shelves = ["All", "Bookmarks", "Bookmarks"]
    return (
        <div className="my-12">
            <div className='mx-auto mb-6 flex container flex-col justify-center'>
                <Heading
                    description={description}
                    buttonText={title == "Shelves" ? "Create shelf" : ""}
                    subTitle={bookId ? "Your Shelves that include" : ""}
                    title={title}
                    href={bookId ? `/book/${bookId}` : ''} />
                <div className="sm:flex sm:items-center sm:justify-between">
                    <Tabs defaultValue="all" className="w-[400px]">
                        <TabsList>
                            <TabsTrigger value="all">All</TabsTrigger>
                            <TabsTrigger value="bookmarks">Bookmarks</TabsTrigger>
                        </TabsList>
                    </Tabs>
                    <div className="flex sm:ml-4 sm:mt-0">
                        <button
                            type="button"
                            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                        >
                            Sort
                        </button>

                    </div>
                </div>
                <div className='flex gap-4 justify-start'>
                    <ol className='space-y-4 w-full'>
                        <p className='hidden text-center text-xs text-gray-500 last:block'>
                            No activity found
                        </p>
                        {shelves.map((shelf) => (
                            <React.Fragment key={shelf}>
                                <ShelfCard />
                            </React.Fragment>
                        ))}
                    </ol>
                </div>
            </div>


        </div>
    );
}
export default ShelvesTemplate
