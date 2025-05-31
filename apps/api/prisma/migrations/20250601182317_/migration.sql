/*
  Warnings:

  - You are about to drop the column `existingEmail` on the `VerificationToken` table. All the data in the column will be lost.
  - You are about to drop the `_UserFollows` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "_UserFollows" DROP CONSTRAINT "_UserFollows_A_fkey";

-- DropForeignKey
ALTER TABLE "_UserFollows" DROP CONSTRAINT "_UserFollows_B_fkey";

-- AlterTable
ALTER TABLE "VerificationToken" DROP COLUMN "existingEmail";

-- DropTable
DROP TABLE "_UserFollows";
