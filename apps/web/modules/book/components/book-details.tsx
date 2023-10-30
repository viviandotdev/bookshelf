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
import { Icons } from "@/components/icons";

interface BookDetailsProps {
  processedBook: BookData;
}

export default function BookDetails({ processedBook }: BookDetailsProps) {
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
                  className="flex items-center justify-center w-8 h-8 rounded-full hover:bg-secondary transition duration-300"
                  style={{ top: "-5px", left: "-5px" }}
                >
                  <Icons.arrowRight className="h-5 w-5 text-primary transition duration-300 transform rotate-0" />
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
                    dangerouslySetInnerHTML={{ __html: processedBook.plot }}
                  ></div>
                </DialogDescription>
              </DialogContent>
            </Dialog>
          </span>
        </span>
      </div>
      <div className="text-sm/[1.25] overflow-hidden max-h-64">
        <div
          className={`leading-normal `}
          dangerouslySetInnerHTML={{ __html: processedBook.plot }}
        ></div>
      </div>
      <div>
        <div className="text-sm text-primary">GENRES</div>
        <hr className="border-t-1 border-primary" />
        <div className="mt-2">
          {processedBook.categories.map((category, index) => {
            return (
              <button
                key={index}
                className={cn(
                  buttonVariants({ variant: "tag", size: "xs" }),
                  "mr-1 mb-1"
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
