/*
  Warnings:

  - You are about to drop the `AuditLog` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Comment` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Review` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `_LikedReviews` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "AuditLog" DROP CONSTRAINT "AuditLog_bookId_fkey";

-- DropForeignKey
ALTER TABLE "AuditLog" DROP CONSTRAINT "AuditLog_userId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_reviewId_fkey";

-- DropForeignKey
ALTER TABLE "Comment" DROP CONSTRAINT "Comment_userId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_bookId_fkey";

-- DropForeignKey
ALTER TABLE "Review" DROP CONSTRAINT "Review_userId_fkey";

-- DropForeignKey
ALTER TABLE "_LikedReviews" DROP CONSTRAINT "_LikedReviews_A_fkey";

-- DropForeignKey
ALTER TABLE "_LikedReviews" DROP CONSTRAINT "_LikedReviews_B_fkey";

-- DropTable
DROP TABLE "AuditLog";

-- DropTable
DROP TABLE "Comment";

-- DropTable
DROP TABLE "Review";

-- DropTable
DROP TABLE "_LikedReviews";

-- DropEnum
DROP TYPE "ACTION";
