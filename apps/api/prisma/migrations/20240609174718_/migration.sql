/*
  Warnings:

  - You are about to drop the column `slug` on the `Book` table. All the data in the column will be lost.

*/
-- DropIndex
DROP INDEX "Book_slug_key";

-- AlterTable
ALTER TABLE "Book" DROP COLUMN "slug";
