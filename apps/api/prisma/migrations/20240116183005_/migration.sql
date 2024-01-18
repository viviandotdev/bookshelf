/*
  Warnings:

  - The values [CREATE,UPDATE] on the enum `ACTION` will be removed. If these variants are still used in the database, this will fail.
  - You are about to drop the column `entityType` on the `AuditLog` table. All the data in the column will be lost.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ACTION_new" AS ENUM ('REVIEW', 'STATUS_UPDATE', 'LIKE', 'RATE', 'LOG');
ALTER TABLE "AuditLog" ALTER COLUMN "action" TYPE "ACTION_new" USING ("action"::text::"ACTION_new");
ALTER TYPE "ACTION" RENAME TO "ACTION_old";
ALTER TYPE "ACTION_new" RENAME TO "ACTION";
DROP TYPE "ACTION_old";
COMMIT;

-- AlterTable
ALTER TABLE "AuditLog" DROP COLUMN "entityType";

-- DropEnum
DROP TYPE "ENTITY_TYPE";
