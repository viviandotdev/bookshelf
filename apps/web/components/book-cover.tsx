// BookCover.tsx

import Image from "next/image";

interface BookCoverProps {
  src: string;
  alt: string;
  size?: "sm" | "lg";
}

const BookCover: React.FC<BookCoverProps> = ({ src, alt, size = "lg" }) => {
  let width, height;

  switch (size) {
    case "sm":
      width = 100;
      height = 600;
      break;
    case "lg":
    default:
      width = 200;
      height = 1200;
  }

  return (
    <Image
      className={`max-w-none block rounded-sm sm:h-[132px] sm:w-[88px] md:h-[198px] md:w-[132px] lg:h-[264px] lg:w-[176px]`}
      src={src}
      alt={alt}
      width={200}
      height={1200}
    />
  );
};

export default BookCover;
