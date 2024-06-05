/*
  Warnings:

  - A unique constraint covering the columns `[userId,bookId]` on the table `UserBook` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateIndex
CREATE UNIQUE INDEX "UserBook_userId_bookId_key" ON "UserBook"("userId", "bookId");
