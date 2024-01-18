-- DropForeignKey
ALTER TABLE "AuditLog" DROP CONSTRAINT "AuditLog_entityId_fkey";

-- AlterTable
ALTER TABLE "AuditLog" ADD COLUMN     "entityData" TEXT;
