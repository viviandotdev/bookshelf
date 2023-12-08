/*
  Warnings:

  - You are about to drop the `LikedReview` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "LikedReview" DROP CONSTRAINT "LikedReview_reviewId_fkey";

-- DropForeignKey
ALTER TABLE "LikedReview" DROP CONSTRAINT "LikedReview_userId_fkey";

-- AlterTable
ALTER TABLE "Review" ADD COLUMN     "likeCount" INTEGER NOT NULL DEFAULT 0;

-- DropTable
DROP TABLE "LikedReview";

-- CreateTable
CREATE TABLE "_LikedReviews" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "_LikedReviews_AB_unique" ON "_LikedReviews"("A", "B");

-- CreateIndex
CREATE INDEX "_LikedReviews_B_index" ON "_LikedReviews"("B");

-- AddForeignKey
ALTER TABLE "_LikedReviews" ADD CONSTRAINT "_LikedReviews_A_fkey" FOREIGN KEY ("A") REFERENCES "Review"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "_LikedReviews" ADD CONSTRAINT "_LikedReviews_B_fkey" FOREIGN KEY ("B") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
