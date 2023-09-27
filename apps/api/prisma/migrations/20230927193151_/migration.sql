/*
  Warnings:

  - You are about to drop the column `category` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `coverImage` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `description` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `pageCount` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `pubDate` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `dateTime` on the `Shelf` table. All the data in the column will be lost.
  - You are about to drop the column `dateTime` on the `ShelfEntry` table. All the data in the column will be lost.
  - You are about to drop the column `userBookId` on the `ShelfEntry` table. All the data in the column will be lost.
  - You are about to drop the `UserBook` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[isbn]` on the table `Book` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `updatedAt` to the `Book` table without a default value. This is not possible if the table is not empty.
  - Made the column `isbn` on table `Book` required. This step will fail if there are existing NULL values in that column.
  - Added the required column `updatedAt` to the `Shelf` table without a default value. This is not possible if the table is not empty.
  - Added the required column `bookId` to the `ShelfEntry` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `ShelfEntry` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "ShelfEntry" DROP CONSTRAINT "ShelfEntry_userBookId_fkey";

-- DropForeignKey
ALTER TABLE "UserBook" DROP CONSTRAINT "UserBook_bookId_fkey";

-- DropForeignKey
ALTER TABLE "UserBook" DROP CONSTRAINT "UserBook_userId_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "category",
DROP COLUMN "coverImage",
DROP COLUMN "description",
DROP COLUMN "pageCount",
DROP COLUMN "pubDate",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "date" TEXT,
ADD COLUMN     "dateFinished" TEXT,
ADD COLUMN     "dateStarted" TEXT,
ADD COLUMN     "pageNum" INTEGER,
ADD COLUMN     "rating" INTEGER,
ADD COLUMN     "status" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "userId" TEXT,
ALTER COLUMN "isbn" SET NOT NULL;

-- AlterTable
ALTER TABLE "Shelf" DROP COLUMN "dateTime",
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- AlterTable
ALTER TABLE "ShelfEntry" DROP COLUMN "dateTime",
DROP COLUMN "userBookId",
ADD COLUMN     "bookId" TEXT NOT NULL,
ADD COLUMN     "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL;

-- DropTable
DROP TABLE "UserBook";

-- CreateIndex
CREATE UNIQUE INDEX "Book_isbn_key" ON "Book"("isbn");

-- AddForeignKey
ALTER TABLE "Book" ADD CONSTRAINT "Book_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShelfEntry" ADD CONSTRAINT "ShelfEntry_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
