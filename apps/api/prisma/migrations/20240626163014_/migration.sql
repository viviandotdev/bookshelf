/*
  Warnings:

  - You are about to drop the column `categories` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `userBookId` on the `Book` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[slug]` on the table `Shelf` will be added. If there are existing duplicate values, this will fail.
  - A unique constraint covering the columns `[id]` on the table `UserBook` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "UserBook" DROP CONSTRAINT "UserBook_bookId_fkey";

-- DropIndex
DROP INDEX "Book_userBookId_key";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "categories",
DROP COLUMN "userBookId";

-- CreateIndex
CREATE UNIQUE INDEX "Shelf_slug_key" ON "Shelf"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "UserBook_id_key" ON "UserBook"("id");

-- AddForeignKey
ALTER TABLE "UserBook" ADD CONSTRAINT "UserBook_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;
