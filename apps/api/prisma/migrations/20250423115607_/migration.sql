-- CreateTable
CREATE TABLE "Read" (
    "id" TEXT NOT NULL,
    "startDate" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "finishedDate" TIMESTAMP(3),
    "active" BOOLEAN NOT NULL,
    "type" "PROGRESS_TYPE" NOT NULL,
    "capacity" INTEGER NOT NULL,
    "userBookId" TEXT NOT NULL,

    CONSTRAINT "Read_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReadLog" (
    "id" TEXT NOT NULL,
    "progress" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "readId" TEXT NOT NULL,

    CONSTRAINT "ReadLog_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Read" ADD CONSTRAINT "Read_userBookId_fkey" FOREIGN KEY ("userBookId") REFERENCES "UserBook"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReadLog" ADD CONSTRAINT "ReadLog_readId_fkey" FOREIGN KEY ("readId") REFERENCES "Read"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
