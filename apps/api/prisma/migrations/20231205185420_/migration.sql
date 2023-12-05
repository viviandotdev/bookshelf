/*
  Warnings:

  - You are about to drop the column `pubDate` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `bookId` on the `Comment` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_bookId_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "pubDate",
ADD COLUMN     "publishedDate" TEXT;

-- AlterTable
ALTER TABLE "Comment" DROP COLUMN "bookId";
