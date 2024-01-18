/*
  Warnings:

  - You are about to drop the column `entityAuthor` on the `AuditLog` table. All the data in the column will be lost.
  - You are about to drop the column `entityCover` on the `AuditLog` table. All the data in the column will be lost.
  - You are about to drop the column `entityData` on the `AuditLog` table. All the data in the column will be lost.
  - You are about to drop the column `entityId` on the `AuditLog` table. All the data in the column will be lost.
  - You are about to drop the column `entityTitle` on the `AuditLog` table. All the data in the column will be lost.
  - You are about to drop the column `entityTotalPages` on the `AuditLog` table. All the data in the column will be lost.
  - Added the required column `bookId` to the `AuditLog` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "AuditLog" DROP COLUMN "entityAuthor",
DROP COLUMN "entityCover",
DROP COLUMN "entityData",
DROP COLUMN "entityId",
DROP COLUMN "entityTitle",
DROP COLUMN "entityTotalPages",
ADD COLUMN     "actionContent" TEXT,
ADD COLUMN     "bookId" TEXT NOT NULL;

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_bookId_fkey" FOREIGN KEY ("bookId") REFERENCES "Book"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
