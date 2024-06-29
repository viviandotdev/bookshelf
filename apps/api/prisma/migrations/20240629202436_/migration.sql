-- CreateEnum
CREATE TYPE "PROGRESS_TYPE" AS ENUM ('PAGES', 'PERCENTAGE');

-- CreateTable
CREATE TABLE "ReadingProgress" (
    "id" TEXT NOT NULL,
    "capacity" INTEGER NOT NULL,
    "progress" INTEGER NOT NULL,
    "type" "PROGRESS_TYPE" NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "readDateId" TEXT NOT NULL,

    CONSTRAINT "ReadingProgress_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReadDate" (
    "id" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finishedDate" TIMESTAMP(3),
    "userBookId" TEXT,

    CONSTRAINT "ReadDate_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ReadingProgress" ADD CONSTRAINT "ReadingProgress_readDateId_fkey" FOREIGN KEY ("readDateId") REFERENCES "ReadDate"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReadDate" ADD CONSTRAINT "ReadDate_userBookId_fkey" FOREIGN KEY ("userBookId") REFERENCES "UserBook"("id") ON DELETE SET NULL ON UPDATE CASCADE;
