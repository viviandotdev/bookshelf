// BookCover.tsx

import { DEFAULT_BOOKCOVER_PLACEHOLDER } from "@/lib/constants";
import Image from "next/image";

interface BookCoverProps {
  src: string | null;
  size?: "sm" | "lg" | "dynamic";
}

const BookCover: React.FC<BookCoverProps> = ({ src, size = "lg" }) => {
  return (
    <div className="relative w-176 h-auto">
      <Image
        src={src ? src : DEFAULT_BOOKCOVER_PLACEHOLDER}
        alt={`Book cover`}
        width={176}
        height={264}
      />
    </div>
  );
};

export default BookCover;
