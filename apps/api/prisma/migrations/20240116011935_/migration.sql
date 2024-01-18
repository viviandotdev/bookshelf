/*
  Warnings:

  - The values [JOURNALENTRY] on the enum `ENTITY_TYPE` will be removed. If these variants are still used in the database, this will fail.

*/
-- AlterEnum
BEGIN;
CREATE TYPE "ENTITY_TYPE_new" AS ENUM ('USERBOOK', 'REVIEW', 'JOURNAL_ENTRY');
ALTER TABLE "AudtiLog" ALTER COLUMN "entityType" TYPE "ENTITY_TYPE_new" USING ("entityType"::text::"ENTITY_TYPE_new");
ALTER TYPE "ENTITY_TYPE" RENAME TO "ENTITY_TYPE_old";
ALTER TYPE "ENTITY_TYPE_new" RENAME TO "ENTITY_TYPE";
DROP TYPE "ENTITY_TYPE_old";
COMMIT;
