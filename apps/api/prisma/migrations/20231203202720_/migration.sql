-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "userBookId" TEXT;

-- AddForeignKey
ALTER TABLE "Review" ADD CONSTRAINT "Review_userBookId_fkey" FOREIGN KEY ("userBookId") REFERENCES "UserBook"("id") ON DELETE SET NULL ON UPDATE CASCADE;
