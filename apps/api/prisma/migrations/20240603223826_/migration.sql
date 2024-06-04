/*
  Warnings:

  - You are about to drop the `Rating` table. If the table is not empty, all the data it contains will be lost.
  - The required column `id` was added to the `Identifier` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.
  - Added the required column `title` to the `UserBook` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Rating" DROP CONSTRAINT "Rating_bookId_fkey";

-- AlterTable
ALTER TABLE "Cover" ADD COLUMN     "userBookId" TEXT;

-- AlterTable
ALTER TABLE "Identifier" ADD COLUMN     "id" TEXT NOT NULL,
ADD CONSTRAINT "Identifier_pkey" PRIMARY KEY ("id");

-- AlterTable
CREATE SEQUENCE userbook_order_seq;
ALTER TABLE "UserBook" ADD COLUMN     "authors" TEXT[],
ADD COLUMN     "title" TEXT NOT NULL,
ALTER COLUMN "order" SET DEFAULT nextval('userbook_order_seq');
ALTER SEQUENCE userbook_order_seq OWNED BY "UserBook"."order";

-- DropTable
DROP TABLE "Rating";

-- CreateTable
CREATE TABLE "_IdentifierToUserBook" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_IdentifierToUserBook_AB_unique" ON "_IdentifierToUserBook"("A", "B");

-- CreateIndex
CREATE INDEX "_IdentifierToUserBook_B_index" ON "_IdentifierToUserBook"("B");

-- AddForeignKey
ALTER TABLE "Cover" ADD CONSTRAINT "Cover_userBookId_fkey" FOREIGN KEY ("userBookId") REFERENCES "UserBook"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IdentifierToUserBook" ADD CONSTRAINT "_IdentifierToUserBook_A_fkey" FOREIGN KEY ("A") REFERENCES "Identifier"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_IdentifierToUserBook" ADD CONSTRAINT "_IdentifierToUserBook_B_fkey" FOREIGN KEY ("B") REFERENCES "UserBook"("id") ON DELETE CASCADE ON UPDATE CASCADE;
