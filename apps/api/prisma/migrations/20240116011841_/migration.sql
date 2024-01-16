/*
  Warnings:

  - You are about to drop the column `username` on the `AudtiLog` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "AudtiLog" DROP COLUMN "username";

-- AddForeignKey
ALTER TABLE "AudtiLog" ADD CONSTRAINT "AudtiLog_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
