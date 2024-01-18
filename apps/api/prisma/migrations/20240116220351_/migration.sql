/*
  Warnings:

  - You are about to drop the column `entityData` on the `AuditLog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AuditLog" DROP COLUMN "entityData";

-- AddForeignKey
ALTER TABLE "AuditLog" ADD CONSTRAINT "AuditLog_entityId_fkey" FOREIGN KEY ("entityId") REFERENCES "UserBook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
