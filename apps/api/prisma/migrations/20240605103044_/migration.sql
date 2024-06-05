/*
  Warnings:

  - You are about to drop the column `order` on the `UserBook` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "UserBook_userId_bookId_key";

-- AlterTable
ALTER TABLE "UserBook" DROP COLUMN "order",
ADD COLUMN     "identifierId" TEXT;
