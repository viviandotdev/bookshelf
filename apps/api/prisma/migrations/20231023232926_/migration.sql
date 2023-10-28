/*
  Warnings:

  - Made the column `userBookId` on table `JournalEntry` required. This step will fail if there are existing NULL values in that column.
  - Made the column `userId` on table `JournalEntry` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "JournalEntry" ALTER COLUMN "userBookId" SET NOT NULL,
ALTER COLUMN "userId" SET NOT NULL;
