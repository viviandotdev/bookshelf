/*
  Warnings:

  - You are about to drop the column `category` on the `Book` table. All the data in the column will be lost.
  - You are about to drop the column `pageCount` on the `Book` table. All the data in the column will be lost.
  - Made the column `isbn` on table `Book` required. This step will fail if there are existing NULL values in that column.

*/
-- AlterTable
ALTER TABLE "Book" DROP COLUMN "category",
DROP COLUMN "pageCount",
ADD COLUMN     "categories" TEXT,
ADD COLUMN     "pageNum" INTEGER,
ALTER COLUMN "isbn" SET NOT NULL;
