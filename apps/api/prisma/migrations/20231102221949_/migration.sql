-- DropForeignKey
ALTER TABLE "UserBookShelves" DROP CONSTRAINT "UserBookShelves_shelfId_fkey";

-- DropForeignKey
ALTER TABLE "UserBookShelves" DROP CONSTRAINT "UserBookShelves_userBookId_fkey";

-- AddForeignKey
ALTER TABLE "UserBookShelves" ADD CONSTRAINT "UserBookShelves_userBookId_fkey" FOREIGN KEY ("userBookId") REFERENCES "UserBook"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "UserBookShelves" ADD CONSTRAINT "UserBookShelves_shelfId_fkey" FOREIGN KEY ("shelfId") REFERENCES "Shelf"("id") ON DELETE CASCADE ON UPDATE CASCADE;
