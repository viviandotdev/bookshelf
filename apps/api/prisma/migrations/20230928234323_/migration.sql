/*
  Warnings:

  - You are about to drop the column `bookId` on the `UserBook` table. All the data in the column will be lost.
  - Added the required column `bookIsbn` to the `UserBook` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "UserBook" DROP CONSTRAINT "UserBook_bookId_fkey";

-- DropIndex
DROP INDEX "UserBook_bookId_key";

-- AlterTable
ALTER TABLE "UserBook" DROP COLUMN "bookId",
ADD COLUMN     "bookIsbn" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "UserBook" ADD CONSTRAINT "UserBook_bookIsbn_fkey" FOREIGN KEY ("bookIsbn") REFERENCES "Book"("isbn") ON DELETE RESTRICT ON UPDATE CASCADE;
