/*
  Warnings:

  - The primary key for the `Admin` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `admin_id` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `created_at` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `peran` on the `Admin` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Admin` table. All the data in the column will be lost.
  - The primary key for the `Divisi` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_at` on the `Divisi` table. All the data in the column will be lost.
  - You are about to drop the column `divisi_id` on the `Divisi` table. All the data in the column will be lost.
  - You are about to drop the column `karyawan_id` on the `Divisi` table. All the data in the column will be lost.
  - You are about to drop the column `nama_divisi` on the `Divisi` table. All the data in the column will be lost.
  - You are about to drop the column `posisi` on the `Divisi` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Divisi` table. All the data in the column will be lost.
  - The primary key for the `Karyawan` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `created_at` on the `Karyawan` table. All the data in the column will be lost.
  - You are about to drop the column `karyawan_id` on the `Karyawan` table. All the data in the column will be lost.
  - You are about to drop the column `nama_karyawan` on the `Karyawan` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Karyawan` table. All the data in the column will be lost.
  - You are about to drop the `Laporan` table. If the table is not empty, all the data it contains will be lost.
  - A unique constraint covering the columns `[email]` on the table `Karyawan` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `nama` to the `Divisi` table without a default value. This is not possible if the table is not empty.
  - Added the required column `divisiId` to the `Karyawan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `jabatanId` to the `Karyawan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `nama` to the `Karyawan` table without a default value. This is not possible if the table is not empty.
  - Made the column `email` on table `Karyawan` required. This step will fail if there are existing NULL values in that column.
  - Changed the type of `jenis_kelamin` on the `Karyawan` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.
  - Changed the type of `status_kepegawaian` on the `Karyawan` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- DropForeignKey
ALTER TABLE "Divisi" DROP CONSTRAINT "Divisi_karyawan_id_fkey";

-- DropIndex
DROP INDEX "Admin_username_key";

-- AlterTable
ALTER TABLE "Admin" DROP CONSTRAINT "Admin_pkey",
DROP COLUMN "admin_id",
DROP COLUMN "created_at",
DROP COLUMN "peran",
DROP COLUMN "updated_at",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD CONSTRAINT "Admin_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Divisi" DROP CONSTRAINT "Divisi_pkey",
DROP COLUMN "created_at",
DROP COLUMN "divisi_id",
DROP COLUMN "karyawan_id",
DROP COLUMN "nama_divisi",
DROP COLUMN "posisi",
DROP COLUMN "updated_at",
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "nama" TEXT NOT NULL,
ADD CONSTRAINT "Divisi_pkey" PRIMARY KEY ("id");

-- AlterTable
ALTER TABLE "Karyawan" DROP CONSTRAINT "Karyawan_pkey",
DROP COLUMN "created_at",
DROP COLUMN "karyawan_id",
DROP COLUMN "nama_karyawan",
DROP COLUMN "updated_at",
ADD COLUMN     "divisiId" INTEGER NOT NULL,
ADD COLUMN     "id" SERIAL NOT NULL,
ADD COLUMN     "jabatanId" INTEGER NOT NULL,
ADD COLUMN     "nama" TEXT NOT NULL,
ALTER COLUMN "email" SET NOT NULL,
DROP COLUMN "jenis_kelamin",
ADD COLUMN     "jenis_kelamin" TEXT NOT NULL,
DROP COLUMN "status_kepegawaian",
ADD COLUMN     "status_kepegawaian" TEXT NOT NULL,
ADD CONSTRAINT "Karyawan_pkey" PRIMARY KEY ("id");

-- DropTable
DROP TABLE "Laporan";

-- DropEnum
DROP TYPE "JenisKelamin";

-- DropEnum
DROP TYPE "StatusKepegawaian";

-- CreateTable
CREATE TABLE "Jabatan" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "Jabatan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Absensi" (
    "id" SERIAL NOT NULL,
    "tanggal" TIMESTAMP(3) NOT NULL,
    "status" TEXT NOT NULL,
    "karyawanId" INTEGER NOT NULL,

    CONSTRAINT "Absensi_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "WaliKelas" (
    "id" SERIAL NOT NULL,
    "karyawanId" INTEGER NOT NULL,
    "kelas" TEXT NOT NULL,
    "jumlah_siswa" INTEGER NOT NULL,

    CONSTRAINT "WaliKelas_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "LaporanAbsensi" (
    "id" SERIAL NOT NULL,
    "karyawanId" INTEGER NOT NULL,
    "bulan" INTEGER NOT NULL,
    "tahun" INTEGER NOT NULL,
    "jumlah_hadir" INTEGER NOT NULL,
    "jumlah_tidak_hadir" INTEGER NOT NULL,
    "persentase" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "LaporanAbsensi_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "WaliKelas_karyawanId_key" ON "WaliKelas"("karyawanId");

-- CreateIndex
CREATE UNIQUE INDEX "Karyawan_email_key" ON "Karyawan"("email");

-- AddForeignKey
ALTER TABLE "Karyawan" ADD CONSTRAINT "Karyawan_divisiId_fkey" FOREIGN KEY ("divisiId") REFERENCES "Divisi"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Karyawan" ADD CONSTRAINT "Karyawan_jabatanId_fkey" FOREIGN KEY ("jabatanId") REFERENCES "Jabatan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Absensi" ADD CONSTRAINT "Absensi_karyawanId_fkey" FOREIGN KEY ("karyawanId") REFERENCES "Karyawan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "WaliKelas" ADD CONSTRAINT "WaliKelas_karyawanId_fkey" FOREIGN KEY ("karyawanId") REFERENCES "Karyawan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "LaporanAbsensi" ADD CONSTRAINT "LaporanAbsensi_karyawanId_fkey" FOREIGN KEY ("karyawanId") REFERENCES "Karyawan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
