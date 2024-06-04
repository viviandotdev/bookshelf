/*
  Warnings:

  - The primary key for the `Identifier` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[source,sourceId]` on the table `Identifier` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "Identifier" DROP CONSTRAINT "Identifier_bookId_fkey";

-- AlterTable
ALTER TABLE "Identifier" DROP CONSTRAINT "Identifier_pkey",
ALTER COLUMN "bookId" DROP NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Identifier_source_sourceId_key" ON "Identifier"("source", "sourceId");

-- AddForeignKey
ALTER TABLE "Identifier" ADD CONSTRAINT "Identifier_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE SET NULL ON UPDATE CASCADE;
