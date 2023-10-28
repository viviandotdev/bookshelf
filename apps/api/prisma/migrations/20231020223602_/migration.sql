/*
  Warnings:

  - You are about to drop the column `totalPages` on the `JournalEntry` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "JournalEntry" DROP COLUMN "totalPages",
ADD COLUMN     "currentPercent" INTEGER;
