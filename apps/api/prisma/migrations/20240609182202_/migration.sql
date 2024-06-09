/*
  Warnings:

  - You are about to drop the column `averageRating` on the `Book` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "averageRating",
ALTER COLUMN "subtitle" DROP NOT NULL;
