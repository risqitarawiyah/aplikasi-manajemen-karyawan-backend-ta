/*
  Warnings:

  - You are about to drop the `Absensi` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `LaporanAbsensi` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "Absensi" DROP CONSTRAINT "Absensi_karyawanId_fkey";

-- DropForeignKey
ALTER TABLE "LaporanAbsensi" DROP CONSTRAINT "LaporanAbsensi_karyawanId_fkey";

-- DropTable
DROP TABLE "Absensi";

-- DropTable
DROP TABLE "LaporanAbsensi";
