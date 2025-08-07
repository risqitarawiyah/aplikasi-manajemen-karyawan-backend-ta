/*
  Warnings:

  - You are about to drop the column `jabatanId` on the `Karyawan` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "Karyawan" DROP CONSTRAINT "Karyawan_jabatanId_fkey";

-- DropIndex
DROP INDEX "Guru_karyawanId_key";

-- AlterTable
ALTER TABLE "Karyawan" DROP COLUMN "jabatanId";

-- CreateTable
CREATE TABLE "KaryawanJabatan" (
    "id" SERIAL NOT NULL,
    "karyawanId" INTEGER NOT NULL,
    "jabatanId" INTEGER NOT NULL,

    CONSTRAINT "KaryawanJabatan_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "KaryawanJabatan_karyawanId_jabatanId_key" ON "KaryawanJabatan"("karyawanId", "jabatanId");

-- AddForeignKey
ALTER TABLE "KaryawanJabatan" ADD CONSTRAINT "KaryawanJabatan_karyawanId_fkey" FOREIGN KEY ("karyawanId") REFERENCES "Karyawan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "KaryawanJabatan" ADD CONSTRAINT "KaryawanJabatan_jabatanId_fkey" FOREIGN KEY ("jabatanId") REFERENCES "Jabatan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
