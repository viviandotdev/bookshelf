/*
  Warnings:

  - You are about to drop the column `endPage` on the `JournalEntry` table. All the data in the column will be lost.
  - You are about to drop the column `startPage` on the `JournalEntry` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "JournalEntry" DROP COLUMN "endPage",
DROP COLUMN "startPage",
ADD COLUMN     "currentPage" INTEGER,
ADD COLUMN     "totalPages" INTEGER;
