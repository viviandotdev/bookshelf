/*
  Warnings:

  - You are about to drop the column `order` on the `UserBook` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserBook" DROP COLUMN "order";

-- CreateTable
CREATE TABLE "Read" (
    "id" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finishedDate" TIMESTAMP(3),
    "userBookId" TEXT NOT NULL,

    CONSTRAINT "Read_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReadingSession" (
    "id" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "progress" INTEGER NOT NULL,
    "type" "PROGRESS_TYPE" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "readId" TEXT NOT NULL,

    CONSTRAINT "ReadingSession_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Read" ADD CONSTRAINT "Read_userBookId_fkey" FOREIGN KEY ("userBookId") REFERENCES "UserBook"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReadingSession" ADD CONSTRAINT "ReadingSession_readId_fkey" FOREIGN KEY ("readId") REFERENCES "Read"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
