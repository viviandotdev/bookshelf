/*
  Warnings:

  - The primary key for the `Identifier` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[bookId]` on the table `Identifier` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "Identifier" DROP CONSTRAINT "Identifier_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "Identifier_bookId_key" ON "Identifier"("bookId");
