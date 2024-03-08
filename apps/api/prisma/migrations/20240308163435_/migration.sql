-- DropIndex
DROP INDEX "Identifier_id_key";

-- AlterTable
ALTER TABLE "Identifier" ADD CONSTRAINT "Identifier_pkey" PRIMARY KEY ("id");
