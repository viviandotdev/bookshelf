/*
  Warnings:

  - A unique constraint covering the columns `[slug]` on the table `Book` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `slug` to the `Book` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Book" ADD COLUMN     "slug" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Book_slug_key" ON "Book"("slug");
