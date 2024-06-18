/*
  Warnings:

  - Added the required column `slug` to the `Shelf` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Shelf" ADD COLUMN     "slug" TEXT NOT NULL;
