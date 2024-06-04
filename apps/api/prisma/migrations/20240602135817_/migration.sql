/*
  Warnings:

  - A unique constraint covering the columns `[url]` on the table `Cover` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Cover_url_key" ON "Cover"("url");
