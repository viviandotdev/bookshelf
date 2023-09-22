// BookCover.tsx

import Image from "next/image";

interface BookCoverProps {
  src: string;
  size?: "sm" | "lg" | "dynamic";
}

const BookCover: React.FC<BookCoverProps> = ({ src, size = "lg" }) => {
  let width, height, sizeClasses;
  const commonClasses = "max-w-none block rounded-sm";
  const mdClasses = "md:h-[182px] md:w-[121px]";
  const lgClasses = "lg:h-[246px] lg:w-[163px]";
  const xlClasses = "xl:h-[264px] xl:w-[176px]";

  switch (size) {
    case "sm":
      sizeClasses = "h-[182px] w-[121px]";
      width = 121;
      height = 182;
      break;
    case "lg":
      sizeClasses = "h-[264px] w-[176px]";
      width = 176;
      height = 264;
      break;
    case "dynamic":
      sizeClasses = mdClasses + " " + lgClasses + " " + xlClasses;
      width = 176;
      height = 264;
      break;
  }

  return (
    <Image
      className={`${commonClasses} ${sizeClasses}`}
      src={src}
      alt={"Book cover"}
      width={width}
      height={height}
    />
  );
};

export default BookCover;
