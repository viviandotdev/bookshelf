-- DropIndex
DROP INDEX "Identifier_bookId_key";

-- AlterTable
ALTER TABLE "Identifier" ADD CONSTRAINT "Identifier_pkey" PRIMARY KEY ("bookId");
