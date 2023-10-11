/*
  Warnings:

  - You are about to drop the `ShelfEntry` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ShelfEntry" DROP CONSTRAINT "ShelfEntry_shelfId_fkey";

-- DropForeignKey
ALTER TABLE "ShelfEntry" DROP CONSTRAINT "ShelfEntry_userBookId_fkey";

-- DropTable
DROP TABLE "ShelfEntry";

-- CreateTable
CREATE TABLE "_ShelfToUserBook" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_ShelfToUserBook_AB_unique" ON "_ShelfToUserBook"("A", "B");

-- CreateIndex
CREATE INDEX "_ShelfToUserBook_B_index" ON "_ShelfToUserBook"("B");

-- AddForeignKey
ALTER TABLE "_ShelfToUserBook" ADD CONSTRAINT "_ShelfToUserBook_A_fkey" FOREIGN KEY ("A") REFERENCES "Shelf"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_ShelfToUserBook" ADD CONSTRAINT "_ShelfToUserBook_B_fkey" FOREIGN KEY ("B") REFERENCES "UserBook"("id") ON DELETE CASCADE ON UPDATE CASCADE;
