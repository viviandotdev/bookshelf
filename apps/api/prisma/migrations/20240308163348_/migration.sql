/*
  Warnings:

  - You are about to drop the column `bookId` on the `Identifier` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[id]` on the table `Identifier` will be added. If there are existing duplicate values, this will fail.
  - The required column `id` was added to the `Identifier` table with a prisma-level default value. This is not possible if the table is not empty. Please add this column as optional, then populate it before making it required.

*/
-- DropForeignKey
ALTER TABLE "Identifier" DROP CONSTRAINT "Identifier_bookId_fkey";

-- DropIndex
DROP INDEX "Identifier_bookId_key";

-- AlterTable
ALTER TABLE "Identifier" DROP COLUMN "bookId",
ADD COLUMN     "id" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Identifier_id_key" ON "Identifier"("id");

-- AddForeignKey
ALTER TABLE "Identifier" ADD CONSTRAINT "Identifier_id_fkey" FOREIGN KEY ("id") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
