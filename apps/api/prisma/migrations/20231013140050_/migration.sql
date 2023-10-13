/*
  Warnings:

  - You are about to drop the `_ShelfToUserBook` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_ShelfToUserBook" DROP CONSTRAINT "_ShelfToUserBook_A_fkey";

-- DropForeignKey
ALTER TABLE "_ShelfToUserBook" DROP CONSTRAINT "_ShelfToUserBook_B_fkey";

-- DropTable
DROP TABLE "_ShelfToUserBook";

-- CreateTable
CREATE TABLE "UserBookShelves" (
    "userBookId" TEXT NOT NULL,
    "shelfId" TEXT NOT NULL,

    CONSTRAINT "UserBookShelves_pkey" PRIMARY KEY ("userBookId","shelfId")
);

-- AddForeignKey
ALTER TABLE "UserBookShelves" ADD CONSTRAINT "UserBookShelves_userBookId_fkey" FOREIGN KEY ("userBookId") REFERENCES "UserBook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBookShelves" ADD CONSTRAINT "UserBookShelves_shelfId_fkey" FOREIGN KEY ("shelfId") REFERENCES "Shelf"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
