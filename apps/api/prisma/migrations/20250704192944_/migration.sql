/*
  Warnings:

  - You are about to drop the column `pagesRead` on the `ReadingSession` table. All the data in the column will be lost.
  - You are about to drop the column `progress` on the `ReadingSession` table. All the data in the column will be lost.
  - You are about to drop the column `type` on the `ReadingSession` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "ReadingSession" DROP COLUMN "pagesRead",
DROP COLUMN "progress",
DROP COLUMN "type";
