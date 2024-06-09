/*
  Warnings:

  - A unique constraint covering the columns `[userBookId]` on the table `Book` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `userBookId` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Made the column `bookId` on table `UserBook` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "UserBook" DROP CONSTRAINT "UserBook_bookId_fkey";

-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "userBookId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "UserBook" ALTER COLUMN "bookId" SET NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Book_userBookId_key" ON "Book"("userBookId");

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_userBookId_fkey" FOREIGN KEY ("userBookId") REFERENCES "UserBook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
