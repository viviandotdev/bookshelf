/*
  Warnings:

  - A unique constraint covering the columns `[readDateId]` on the table `ReadingProgress` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `active` to the `ReadDate` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "ReadDate" ADD COLUMN     "active" BOOLEAN NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "ReadingProgress_readDateId_key" ON "ReadingProgress"("readDateId");
