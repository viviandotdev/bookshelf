-- CreateTable
CREATE TABLE "JournalEntry" (
    "id" TEXT NOT NULL,
    "readingNotes" TEXT,
    "dateRead" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "startPage" INTEGER,
    "endPage" INTEGER,
    "userBookId" TEXT NOT NULL,

    CONSTRAINT "JournalEntry_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "JournalEntry" ADD CONSTRAINT "JournalEntry_userBookId_fkey" FOREIGN KEY ("userBookId") REFERENCES "UserBook"("id") ON DELETE CASCADE ON UPDATE CASCADE;
