/*
  Warnings:

  - The primary key for the `Book` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[slug]` on the table `Book` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "AuditLog" DROP CONSTRAINT "AuditLog_bookId_fkey";

-- DropForeignKey
ALTER TABLE "Cover" DROP CONSTRAINT "Cover_bookId_fkey";

-- DropForeignKey
ALTER TABLE "Identifier" DROP CONSTRAINT "Identifier_bookId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_bookId_fkey";

-- DropForeignKey
ALTER TABLE "UserBook" DROP CONSTRAINT "UserBook_bookId_fkey";

-- AlterTable
ALTER TABLE "AuditLog" ALTER COLUMN "bookId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Book" DROP CONSTRAINT "Book_pkey",
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Book_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Book_id_seq";

-- AlterTable
ALTER TABLE "Cover" ALTER COLUMN "bookId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Identifier" ALTER COLUMN "bookId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Review" ALTER COLUMN "bookId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "UserBook" ALTER COLUMN "bookId" SET DATA TYPE TEXT;

-- CreateIndex
CREATE UNIQUE INDEX "Book_slug_key" ON "Book"("slug");

-- AddForeignKey
ALTER TABLE "Cover" ADD CONSTRAINT "Cover_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Identifier" ADD CONSTRAINT "Identifier_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBook" ADD CONSTRAINT "UserBook_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
