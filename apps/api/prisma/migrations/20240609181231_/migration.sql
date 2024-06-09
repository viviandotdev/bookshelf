/*
  Warnings:

  - A unique constraint covering the columns `[bookId]` on the table `UserBook` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_userBookId_fkey";

-- AlterTable
ALTER TABLE "Book" ALTER COLUMN "userBookId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "UserBook_bookId_key" ON "UserBook"("bookId");

-- AddForeignKey
ALTER TABLE "UserBook" ADD CONSTRAINT "UserBook_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
