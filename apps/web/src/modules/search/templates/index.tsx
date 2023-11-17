
import React from 'react'
import Hit from '../components/hit';
import { BookData } from '@/types/interfaces';
import { UserBook } from '@/graphql/graphql';
import { useSearchParams } from 'next/navigation';
import { Pagination } from '@/components/pagination';
import { RESULTS_PAGE_SIZE } from '@/lib/constants';

export type BookHit = {
    book: BookData,
    userBook: UserBook,
}
interface SeachTemplateProps {
    hits: BookHit[],
    count: number
    query: {
        q: string,
        page: string | string[] | undefined
    }


}

export const SeachTemplate: React.FC<SeachTemplateProps> = ({ hits, count, query }) => {
    const pageCount = Math.ceil(count / RESULTS_PAGE_SIZE)
    const resultSelections = ["Title", "Author", "Categories"];
    // Search params


    function selection(title: string) {
        return (
            <div className="text-xs bg-secondary w-[fill-available] rounded-lg p-2 cursor-pointer">
                {title}
            </div>
        );
    }

    return (
        <div>
            <div className="flex-col justify-center">
                <div className="w-full grid grid-cols-4 gap-4">
                    <div className="col-span-4 xl:col-span-3 mt-8 ">
                        <div className="leading-7 items-start text-primary font-semibold ">
                            Found {count} results for "{query.q}"
                        </div>
                        <hr className="mt-2 border-t-1 border-primary" />
                        <div>
                            {hits && hits.map((hit, index) => (
                                <li key={index} className="list-none">
                                    <Hit hit={hit} />
                                </li>
                            ))}
                        </div>
                    </div>
                    <div className="hidden xl:block">
                        <div className="w-full justify-between mt-8 rounded-lg flex flex-col text-sm gap-1 text-muted-foreground font-light">
                            <div className="leading-7 items-start text-primary font-semibold ">
                                Field to search
                            </div>
                            <hr className="mt-1 border-t-1 border-primary" />
                            {resultSelections.map((heading) => {
                                return selection(heading);
                            })}
                        </div>
                    </div>
                </div>
                <Pagination
                    page={(query.page)}
                    totalPages={pageCount}
                />
            </div>
        </div>
    );
}
export default SeachTemplate
