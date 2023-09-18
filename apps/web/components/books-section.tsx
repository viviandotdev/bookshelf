import React from "react";
import BookCover from "./book-cover";

interface BooksSectionProps {
  image_data: string[];
  heading: string;
}

export const BooksSection: React.FC<BooksSectionProps> = ({
  image_data,
  heading,
}) => {
  return (
    <>
      <div className="pt-4">
        <div className="flex justify-between">
          <h3 className="text-primary font-semibold">{heading}</h3>
          <h3 className="text-primary font-semibold ">More</h3>
        </div>
        <hr className="mt-1" />
      </div>
      <div className="flex justify-between overflow-hidden flex-row m-0">
        {image_data.map((image, idx) => (
          <div key={idx} className="flex-row">
            <BookCover src={image} alt="book cover" />
          </div>
        ))}
      </div>
    </>
  );
};
