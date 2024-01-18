-- AlterEnum
ALTER TYPE "ACTION" ADD VALUE 'COMMENT';

-- AlterTable
ALTER TABLE "AuditLog" ADD COLUMN     "entityAuthor" TEXT,
ADD COLUMN     "entityCover" TEXT,
ADD COLUMN     "entityTotalPages" TEXT;
