"use client";
import { cn, formatDate } from "@/lib/utils";
import { BookData } from "@/types/interfaces";
import React from "react";
import { buttonVariants } from "@/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Icons } from "../../../components/icons";

interface BookInfoProps {
    processedBook: BookData;
}

export default function BookInfo({ processedBook }: BookInfoProps) {
    //TODO: Add a show more button
    return (
        <>
            <div className=" text-base font-semibold">
                <span className="flex items-center">
                    <span className="mr-2">About this Book</span>
                    <span className="relative">
                        <Dialog>
                            <DialogTrigger asChild>
                                <button
                                    className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-beige-100 transition duration-300"
                                    style={{ top: "-5px", left: "-5px" }}
                                >
                                    <Icons.arrowRight className="h-5 w-5 text-beige transition duration-300 transform rotate-0" />
                                </button>
                            </DialogTrigger>
                            <DialogContent className="sm:max-w-[664px] max-h-4/6 overflow-scroll">
                                <DialogHeader>
                                    <DialogTitle>{processedBook.title}</DialogTitle>
                                    <DialogDescription className="inline text-sm leading-normal">
                                        by {processedBook.author}
                                    </DialogDescription>
                                </DialogHeader>
                                <DialogDescription>
                                    <div
                                        className={`leading-normal `}
                                        dangerouslySetInnerHTML={{ __html: processedBook.description }}
                                    ></div>
                                </DialogDescription>
                            </DialogContent>
                        </Dialog>
                    </span>
                </span>
            </div>
            <div className="text-sm overflow-hidden max-h-64">
                <div
                    className={`leading-normal `}
                    dangerouslySetInnerHTML={{ __html: processedBook.description }}
                ></div>
            </div>
            <div>
                <div className="text-sm text-beige">GENRES</div>
                <hr className="border-t-1 border-beige" />
                <div className="mt-2">
                    {processedBook.categories.map((category, index) => {
                        return (
                            <button
                                key={index}
                                className={cn(
                                    buttonVariants({ variant: "pill", size: "xs" }),
                                    "mr-1 mb-1 rounded-md bg-beige-200 text-xs text-gray-600 font-normal"
                                )}
                                disabled={true}
                            >
                                {category}
                            </button>
                        );
                    })}
                </div>
            </div>
        </>
    );
}
