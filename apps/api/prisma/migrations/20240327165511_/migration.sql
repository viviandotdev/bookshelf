/*
  Warnings:

  - You are about to drop the column `coverImage` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `workId` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `googleBooks` on the `Identifier` table. All the data in the column will be lost.
  - You are about to drop the column `userBookId` on the `Review` table. All the data in the column will be lost.
  - You are about to drop the `Author` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Work` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AuthorToBook` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_AuthorToWork` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[id]` on the table `AuditLog` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateEnum
CREATE TYPE "SIZE" AS ENUM ('SMALL', 'MEDIUM', 'LARGE');

-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_workId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_bookId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_userBookId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_userId_fkey";

-- DropForeignKey
ALTER TABLE "_AuthorToBook" DROP CONSTRAINT "_AuthorToBook_A_fkey";

-- DropForeignKey
ALTER TABLE "_AuthorToBook" DROP CONSTRAINT "_AuthorToBook_B_fkey";

-- DropForeignKey
ALTER TABLE "_AuthorToWork" DROP CONSTRAINT "_AuthorToWork_A_fkey";

-- DropForeignKey
ALTER TABLE "_AuthorToWork" DROP CONSTRAINT "_AuthorToWork_B_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "coverImage",
DROP COLUMN "workId",
ADD COLUMN     "authors" TEXT[],
ADD COLUMN     "averageRating" DOUBLE PRECISION,
ADD COLUMN     "categories" TEXT[];

-- AlterTable
ALTER TABLE "Identifier" DROP COLUMN "googleBooks",
ADD COLUMN     "google" TEXT;

-- AlterTable
ALTER TABLE "Review" DROP COLUMN "userBookId";

-- AlterTable
ALTER TABLE "UserBook" ADD COLUMN     "authors" TEXT,
ADD COLUMN     "title" TEXT;

-- DropTable
DROP TABLE "Author";

-- DropTable
DROP TABLE "Work";

-- DropTable
DROP TABLE "_AuthorToBook";

-- DropTable
DROP TABLE "_AuthorToWork";

-- CreateTable
CREATE TABLE "Cover" (
    "id" TEXT NOT NULL,
    "url" TEXT NOT NULL,
    "size" "SIZE" NOT NULL,
    "bookId" INTEGER,
    "userBookId" TEXT,

    CONSTRAINT "Cover_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "AuditLog_id_key" ON "AuditLog"("id");

-- AddForeignKey
ALTER TABLE "Cover" ADD CONSTRAINT "Cover_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Cover" ADD CONSTRAINT "Cover_userBookId_fkey" FOREIGN KEY ("userBookId") REFERENCES "UserBook"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;
