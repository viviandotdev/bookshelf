/*
  Warnings:

  - You are about to drop the column `createdAt` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `date` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `dateFinished` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `dateStarted` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `pageNum` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `rating` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `status` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `userId` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `Shelf` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `Shelf` table. All the data in the column will be lost.
  - You are about to drop the column `bookId` on the `ShelfEntry` table. All the data in the column will be lost.
  - You are about to drop the column `createdAt` on the `ShelfEntry` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `ShelfEntry` table. All the data in the column will be lost.
  - Added the required column `userBookId` to the `ShelfEntry` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Book" DROP CONSTRAINT "Book_userId_fkey";

-- DropForeignKey
ALTER TABLE "ShelfEntry" DROP CONSTRAINT "ShelfEntry_bookId_fkey";

-- DropIndex
DROP INDEX "Book_isbn_key";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "createdAt",
DROP COLUMN "date",
DROP COLUMN "dateFinished",
DROP COLUMN "dateStarted",
DROP COLUMN "pageNum",
DROP COLUMN "rating",
DROP COLUMN "status",
DROP COLUMN "updatedAt",
DROP COLUMN "userId",
ADD COLUMN     "category" TEXT,
ADD COLUMN     "coverImage" TEXT,
ADD COLUMN     "description" TEXT,
ADD COLUMN     "pageCount" TEXT,
ADD COLUMN     "pubDate" TEXT,
ALTER COLUMN "isbn" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Shelf" DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "dateTime" TEXT;

-- AlterTable
ALTER TABLE "ShelfEntry" DROP COLUMN "bookId",
DROP COLUMN "createdAt",
DROP COLUMN "updatedAt",
ADD COLUMN     "dateTime" TEXT,
ADD COLUMN     "userBookId" TEXT NOT NULL;

-- CreateTable
CREATE TABLE "UserBook" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "bookId" TEXT NOT NULL,
    "status" TEXT NOT NULL,
    "rating" INTEGER,
    "dateStarted" TEXT,
    "dateFinished" TEXT,

    CONSTRAINT "UserBook_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "UserBook" ADD CONSTRAINT "UserBook_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBook" ADD CONSTRAINT "UserBook_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ShelfEntry" ADD CONSTRAINT "ShelfEntry_userBookId_fkey" FOREIGN KEY ("userBookId") REFERENCES "UserBook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
