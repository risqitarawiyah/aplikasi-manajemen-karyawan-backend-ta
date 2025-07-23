/*
  Warnings:

  - You are about to drop the column `status_kepegawaian` on the `Karyawan` table. All the data in the column will be lost.
  - You are about to drop the column `jumlah_siswa` on the `WaliKelas` table. All the data in the column will be lost.
  - You are about to drop the column `karyawanId` on the `WaliKelas` table. All the data in the column will be lost.
  - You are about to drop the column `kelas` on the `WaliKelas` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[guruId]` on the table `WaliKelas` will be added. If there are existing duplicate values, this will fail.

*/
-- DropForeignKey
ALTER TABLE "WaliKelas" DROP CONSTRAINT "WaliKelas_karyawanId_fkey";

-- DropIndex
DROP INDEX "WaliKelas_karyawanId_key";

-- AlterTable
ALTER TABLE "Karyawan" DROP COLUMN "status_kepegawaian",
ADD COLUMN     "statusId" INTEGER;

-- AlterTable
ALTER TABLE "WaliKelas" DROP COLUMN "jumlah_siswa",
DROP COLUMN "karyawanId",
DROP COLUMN "kelas",
ADD COLUMN     "guruId" INTEGER,
ADD COLUMN     "kelasId" INTEGER,
ADD COLUMN     "tahun_ajaran" TEXT;

-- CreateTable
CREATE TABLE "StatusKepegawaian" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "StatusKepegawaian_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kelas" (
    "id" SERIAL NOT NULL,
    "tingkat" INTEGER NOT NULL,
    "jurusan" TEXT NOT NULL,
    "ruang" TEXT NOT NULL,
    "jumlah_siswa" INTEGER NOT NULL,

    CONSTRAINT "Kelas_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "StatusKepegawaian_nama_key" ON "StatusKepegawaian"("nama");

-- CreateIndex
CREATE UNIQUE INDEX "WaliKelas_guruId_key" ON "WaliKelas"("guruId");

-- AddForeignKey
ALTER TABLE "Karyawan" ADD CONSTRAINT "Karyawan_statusId_fkey" FOREIGN KEY ("statusId") REFERENCES "StatusKepegawaian"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaliKelas" ADD CONSTRAINT "WaliKelas_guruId_fkey" FOREIGN KEY ("guruId") REFERENCES "Guru"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaliKelas" ADD CONSTRAINT "WaliKelas_kelasId_fkey" FOREIGN KEY ("kelasId") REFERENCES "Kelas"("id") ON DELETE SET NULL ON UPDATE CASCADE;
