/*
  Warnings:

  - Made the column `currentPage` on table `JournalEntry` required. This step will fail if there are existing NULL values in that column.
  - Made the column `currentPercent` on table `JournalEntry` required. This step will fail if there are existing NULL values in that column.
  - Made the column `pagesRead` on table `JournalEntry` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "JournalEntry" ALTER COLUMN "currentPage" SET NOT NULL,
ALTER COLUMN "currentPercent" SET NOT NULL,
ALTER COLUMN "pagesRead" SET NOT NULL;
