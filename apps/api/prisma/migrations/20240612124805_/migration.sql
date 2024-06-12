/*
  Warnings:

  - Added the required column `source` to the `Cover` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Cover" ADD COLUMN     "source" "SOURCE" NOT NULL;

-- CreateTable
CREATE TABLE "Rating" (
    "id" TEXT NOT NULL,
    "count" INTEGER NOT NULL,
    "source" "SOURCE" NOT NULL,
    "maxScore" DOUBLE PRECISION NOT NULL,
    "score" DOUBLE PRECISION NOT NULL,
    "bookId" TEXT,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;
