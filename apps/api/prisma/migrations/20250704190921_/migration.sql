/*
  Warnings:

  - You are about to drop the column `capacity` on the `ReadingSession` table. All the data in the column will be lost.
  - Added the required column `endPage` to the `ReadingSession` table without a default value. This is not possible if the table is not empty.
  - Added the required column `startPage` to the `ReadingSession` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ReadingSession" DROP COLUMN "capacity",
ADD COLUMN     "endPage" INTEGER NOT NULL,
ADD COLUMN     "startPage" INTEGER NOT NULL;
