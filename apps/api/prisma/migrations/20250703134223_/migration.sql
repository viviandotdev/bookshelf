/*
  Warnings:

  - Added the required column `capacity` to the `Read` table without a default value. This is not possible if the table is not empty.
  - Added the required column `pagesRead` to the `ReadingProgress` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Read" ADD COLUMN     "capacity" INTEGER NOT NULL;

-- AlterTable
ALTER TABLE "ReadingProgress" ADD COLUMN     "pagesRead" INTEGER NOT NULL;
