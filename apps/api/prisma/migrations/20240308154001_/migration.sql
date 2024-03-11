-- DropForeignKey
ALTER TABLE "Work" DROP CONSTRAINT "Work_mainEditionId_fkey";

-- DropIndex
DROP INDEX "Work_mainEditionId_key";
