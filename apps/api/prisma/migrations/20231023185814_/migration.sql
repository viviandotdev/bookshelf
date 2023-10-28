/*
  Warnings:

  - You are about to drop the column `dateFinished` on the `UserBook` table. All the data in the column will be lost.
  - You are about to drop the column `dateStarted` on the `UserBook` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "UserBook" DROP COLUMN "dateFinished",
DROP COLUMN "dateStarted",
ADD COLUMN     "dataAdded" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
