/*
  Warnings:

  - The primary key for the `Identifier` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `Identifier` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[bookId]` on the table `Identifier` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `bookId` to the `Identifier` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Identifier" DROP CONSTRAINT "Identifier_id_fkey";

-- AlterTable
ALTER TABLE "Identifier" DROP CONSTRAINT "Identifier_pkey",
DROP COLUMN "id",
ADD COLUMN     "bookId" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Identifier_bookId_key" ON "Identifier"("bookId");

-- AddForeignKey
ALTER TABLE "Identifier" ADD CONSTRAINT "Identifier_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
