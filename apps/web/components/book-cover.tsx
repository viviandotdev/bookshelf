// BookCover.tsx

import Image from "next/image";

interface BookCoverProps {
  src: string;
  size?: "sm" | "lg" | "dynamic";
}

const BookCover: React.FC<BookCoverProps> = ({ src, size = "lg" }) => {
  return (
    <div className="relative w-176 h-auto">
      <Image src={src} alt={`Book cover`} width={176} height={264} />
    </div>
  );
};

export default BookCover;
