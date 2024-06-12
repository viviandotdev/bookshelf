/*
  Warnings:

  - You are about to drop the `_BookToIdentifier` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_BookToIdentifier" DROP CONSTRAINT "_BookToIdentifier_A_fkey";

-- DropForeignKey
ALTER TABLE "_BookToIdentifier" DROP CONSTRAINT "_BookToIdentifier_B_fkey";

-- AlterTable
ALTER TABLE "Identifier" ADD COLUMN     "bookId" TEXT;

-- DropTable
DROP TABLE "_BookToIdentifier";

-- CreateTable
CREATE TABLE "Rating" (
    "id" TEXT NOT NULL,
    "rating" DOUBLE PRECISION NOT NULL,
    "source" "SOURCE" NOT NULL,
    "bookId" TEXT,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Identifier" ADD CONSTRAINT "Identifier_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE SET NULL ON UPDATE CASCADE;
