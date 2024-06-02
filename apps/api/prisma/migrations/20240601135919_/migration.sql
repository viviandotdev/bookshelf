/*
  Warnings:

  - You are about to drop the column `userBookId` on the `Cover` table. All the data in the column will be lost.
  - You are about to drop the column `amazon` on the `Identifier` table. All the data in the column will be lost.
  - You are about to drop the column `goodreads` on the `Identifier` table. All the data in the column will be lost.
  - You are about to drop the column `google` on the `Identifier` table. All the data in the column will be lost.
  - You are about to drop the column `isbn10` on the `Identifier` table. All the data in the column will be lost.
  - You are about to drop the column `isbn13` on the `Identifier` table. All the data in the column will be lost.
  - You are about to drop the column `openLibrary` on the `Identifier` table. All the data in the column will be lost.
  - You are about to drop the column `authors` on the `UserBook` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `UserBook` table. All the data in the column will be lost.
  - Added the required column `source` to the `Identifier` table without a default value. This is not possible if the table is not empty.
  - Added the required column `sourceId` to the `Identifier` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "SOURCE" AS ENUM ('GOODREADS', 'GOOGLE', 'AMAZON', 'OPEN_LIBRARY', 'ISBN_10', 'ISBN_13');

-- DropForeignKey
ALTER TABLE "Cover" DROP CONSTRAINT "Cover_userBookId_fkey";

-- DropIndex
DROP INDEX "Identifier_bookId_key";

-- AlterTable
ALTER TABLE "Cover" DROP COLUMN "userBookId";

-- AlterTable
ALTER TABLE "Identifier" DROP COLUMN "amazon",
DROP COLUMN "goodreads",
DROP COLUMN "google",
DROP COLUMN "isbn10",
DROP COLUMN "isbn13",
DROP COLUMN "openLibrary",
ADD COLUMN     "source" "SOURCE" NOT NULL,
ADD COLUMN     "sourceId" TEXT NOT NULL,
ADD CONSTRAINT "Identifier_pkey" PRIMARY KEY ("bookId", "sourceId");

-- AlterTable
ALTER TABLE "UserBook" DROP COLUMN "authors",
DROP COLUMN "title";

-- CreateTable
CREATE TABLE "Rating" (
    "id" TEXT NOT NULL,
    "source" "SOURCE" NOT NULL,
    "maxRating" INTEGER NOT NULL,
    "rating" INTEGER NOT NULL,
    "count" INTEGER NOT NULL,
    "bookId" TEXT,

    CONSTRAINT "Rating_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Rating" ADD CONSTRAINT "Rating_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE SET NULL ON UPDATE CASCADE;
