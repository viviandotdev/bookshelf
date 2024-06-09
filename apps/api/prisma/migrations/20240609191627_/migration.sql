/*
  Warnings:

  - Changed the type of `status` on the `UserBook` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- CreateEnum
CREATE TYPE "READING_STATUS" AS ENUM ('WANT_TO_READ', 'FINISHED', 'READING', 'DID_NOT_FINISH', 'UP_NEXT');

-- AlterTable
ALTER TABLE "UserBook" DROP COLUMN "status",
ADD COLUMN     "status" "READING_STATUS" NOT NULL;
