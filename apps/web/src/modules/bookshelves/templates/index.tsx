import React, { Suspense } from "react";
import { CreateShelfModal } from "@/modules/bookshelves/components/modals/create-shelf-modal";
import { dm_sefif_display } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import ShelfMenu from "../components/shelf-menu";
import { SortingOptions } from "../components/sorting-options";
import StatusMenu from "../components/status-menu";
import SkeletonBookList from "@/modules/skeletons/components/skeleton-booklist";
import { BookList } from "../components/book-list";
import Board from "../components/board";


interface BookshelvesTemplateProps {
}

export default function BookshelvesTemplate({ }: BookshelvesTemplateProps) {

    return (
        <>
            <div className="col-span-4 xl:col-span-3 pt-1.5">
                <nav className="flex flex-col w-full rounded-lg justify-between mt-8 pb-2">
                    <h1
                        className={cn(
                            dm_sefif_display.className,
                            "text-primary text-4xl mb-8"
                        )}
                    >
                        Bookshelves
                    </h1>
                    <div className="flex gap-2 text-sm items-center justify-between relative w-full">
                        <div className="flex gap-2">
                            <ShelfMenu />
                            <StatusMenu />
                        </div>
                        <SortingOptions />
                    </div>
                    <hr className="my-2 border-t-1 border-primary" />
                </nav>

                <Suspense fallback={<SkeletonBookList />}>
                    {/* <BookList /> */}
                    <Board />
                </Suspense>

            </div >
            <CreateShelfModal />
        </>

    );
}
