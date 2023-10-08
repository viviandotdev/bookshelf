/*
  Warnings:

  - A unique constraint covering the columns `[userId,name]` on the table `Shelf` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "Shelf_userId_name_key" ON "Shelf"("userId", "name");
