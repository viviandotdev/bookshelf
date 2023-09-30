/*
  Warnings:

  - The primary key for the `Book` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `isbn` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `bookIsbn` on the `UserBook` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Book` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[userId,bookId]` on the table `UserBook` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bookId` to the `UserBook` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserBook" DROP CONSTRAINT "UserBook_bookIsbn_fkey";

-- DropIndex
DROP INDEX "Book_isbn_key";

-- DropIndex
DROP INDEX "UserBook_userId_bookIsbn_key";

-- AlterTable
ALTER TABLE "Book" DROP CONSTRAINT "Book_pkey",
DROP COLUMN "isbn";

-- AlterTable
ALTER TABLE "UserBook" DROP COLUMN "bookIsbn",
ADD COLUMN     "bookId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Book_id_key" ON "Book"("id");

-- CreateIndex
CREATE UNIQUE INDEX "UserBook_userId_bookId_key" ON "UserBook"("userId", "bookId");

-- AddForeignKey
ALTER TABLE "UserBook" ADD CONSTRAINT "UserBook_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
