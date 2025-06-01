/*
  Warnings:

  - You are about to drop the column `existingEmail` on the `VerificationToken` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "VerificationToken" DROP COLUMN "existingEmail";

-- AlterTable
ALTER TABLE "_UserFollows" ADD CONSTRAINT "_UserFollows_AB_pkey" PRIMARY KEY ("A", "B");

-- DropIndex
DROP INDEX "_UserFollows_AB_unique";
