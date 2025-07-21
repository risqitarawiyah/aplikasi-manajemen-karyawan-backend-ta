-- CreateEnum
CREATE TYPE "JenisPenempatan" AS ENUM ('SATMINKAL', 'NON_SATMINKAL');

-- CreateTable
CREATE TABLE "Mapel" (
    "id" SERIAL NOT NULL,
    "nama" TEXT NOT NULL,

    CONSTRAINT "Mapel_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Guru" (
    "id" SERIAL NOT NULL,
    "karyawanId" INTEGER NOT NULL,
    "mapelId" INTEGER NOT NULL,
    "jumlahJtm" INTEGER,
    "penempatan" "JenisPenempatan" NOT NULL,

    CONSTRAINT "Guru_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Guru_karyawanId_key" ON "Guru"("karyawanId");

-- AddForeignKey
ALTER TABLE "Guru" ADD CONSTRAINT "Guru_karyawanId_fkey" FOREIGN KEY ("karyawanId") REFERENCES "Karyawan"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Guru" ADD CONSTRAINT "Guru_mapelId_fkey" FOREIGN KEY ("mapelId") REFERENCES "Mapel"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
