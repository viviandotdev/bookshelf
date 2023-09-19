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
      className={`max-w-none block rounded-sm md:h-[182px] md:w-[121px] lg:h-[246px] lg:w-[163px] xl:h-[264px] xl:w-[176px]`}
      src={src}
      alt={alt}
      width={200}
      height={1200}
    />
  );
};

export default BookCover;
