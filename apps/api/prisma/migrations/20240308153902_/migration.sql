/*
  Warnings:

  - A unique constraint covering the columns `[mainEditionId]` on the table `Work` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Work_mainEditionId_key" ON "Work"("mainEditionId");

-- AddForeignKey
ALTER TABLE "Work" ADD CONSTRAINT "Work_mainEditionId_fkey" FOREIGN KEY ("mainEditionId") REFERENCES "Book"("id") ON DELETE SET NULL ON UPDATE CASCADE;
