import React from 'react'
import Hit from '../components/hit';
import { BookData } from '@/types/interfaces';
import { UserBook } from '@/graphql/graphql';

export type BookHit = BookData & {
    userBook?: UserBook
};
interface SeachTemplateProps {
    hits: BookHit[]

}

export const SeachTemplate: React.FC<SeachTemplateProps> = ({ hits }) => {
    const resultSelections = ["All", "Title", "Author"];
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
                    <div className="col-span-4 xl:col-span-3">

                        <hr className="mt-1 border-t-1 border-primary" />
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
                                Show Results For
                            </div>
                            <hr className="mt-1 border-t-1 border-primary" />
                            {resultSelections.map((heading) => {
                                return selection(heading);
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default SeachTemplate
