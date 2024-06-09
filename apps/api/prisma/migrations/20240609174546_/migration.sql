/*
  Warnings:

  - You are about to drop the column `description` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `publishedDate` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `publisher` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `userBookId` on the `Cover` table. All the data in the column will be lost.
  - You are about to drop the column `bookId` on the `Identifier` table. All the data in the column will be lost.
  - You are about to drop the column `authors` on the `UserBook` table. All the data in the column will be lost.
  - You are about to drop the column `pageCount` on the `UserBook` table. All the data in the column will be lost.
  - You are about to drop the column `subtitle` on the `UserBook` table. All the data in the column will be lost.
  - You are about to drop the column `title` on the `UserBook` table. All the data in the column will be lost.
  - You are about to drop the `_IdentifierToUserBook` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `subtitle` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Cover" DROP CONSTRAINT "Cover_userBookId_fkey";

-- DropForeignKey
ALTER TABLE "Identifier" DROP CONSTRAINT "Identifier_bookId_fkey";

-- DropForeignKey
ALTER TABLE "_IdentifierToUserBook" DROP CONSTRAINT "_IdentifierToUserBook_A_fkey";

-- DropForeignKey
ALTER TABLE "_IdentifierToUserBook" DROP CONSTRAINT "_IdentifierToUserBook_B_fkey";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "description",
DROP COLUMN "publishedDate",
DROP COLUMN "publisher",
ADD COLUMN     "subtitle" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Cover" DROP COLUMN "userBookId";

-- AlterTable
ALTER TABLE "Identifier" DROP COLUMN "bookId";

-- AlterTable
ALTER TABLE "UserBook" DROP COLUMN "authors",
DROP COLUMN "pageCount",
DROP COLUMN "subtitle",
DROP COLUMN "title";

-- DropTable
DROP TABLE "_IdentifierToUserBook";

-- CreateTable
CREATE TABLE "_BookToIdentifier" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_BookToIdentifier_AB_unique" ON "_BookToIdentifier"("A", "B");

-- CreateIndex
CREATE INDEX "_BookToIdentifier_B_index" ON "_BookToIdentifier"("B");

-- AddForeignKey
ALTER TABLE "_BookToIdentifier" ADD CONSTRAINT "_BookToIdentifier_A_fkey" FOREIGN KEY ("A") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_BookToIdentifier" ADD CONSTRAINT "_BookToIdentifier_B_fkey" FOREIGN KEY ("B") REFERENCES "Identifier"("id") ON DELETE CASCADE ON UPDATE CASCADE;
