/*
  Warnings:

  - Made the column `statusId` on table `Karyawan` required. This step will fail if there are existing NULL values in that column.
  - Made the column `guruId` on table `WaliKelas` required. This step will fail if there are existing NULL values in that column.
  - Made the column `kelasId` on table `WaliKelas` required. This step will fail if there are existing NULL values in that column.
  - Made the column `tahun_ajaran` on table `WaliKelas` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Karyawan" DROP CONSTRAINT "Karyawan_statusId_fkey";

-- DropForeignKey
ALTER TABLE "WaliKelas" DROP CONSTRAINT "WaliKelas_guruId_fkey";

-- DropForeignKey
ALTER TABLE "WaliKelas" DROP CONSTRAINT "WaliKelas_kelasId_fkey";

-- AlterTable
ALTER TABLE "Karyawan" ALTER COLUMN "statusId" SET NOT NULL;

-- AlterTable
ALTER TABLE "WaliKelas" ALTER COLUMN "guruId" SET NOT NULL,
ALTER COLUMN "kelasId" SET NOT NULL,
ALTER COLUMN "tahun_ajaran" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Karyawan" ADD CONSTRAINT "Karyawan_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "StatusKepegawaian"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaliKelas" ADD CONSTRAINT "WaliKelas_guruId_fkey" FOREIGN KEY ("guruId") REFERENCES "Guru"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaliKelas" ADD CONSTRAINT "WaliKelas_kelasId_fkey" FOREIGN KEY ("kelasId") REFERENCES "Kelas"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
