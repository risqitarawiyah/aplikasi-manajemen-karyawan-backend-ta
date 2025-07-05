-- CreateEnum
CREATE TYPE "StatusKepegawaian" AS ENUM ('PNS', 'NON_PNS');

-- CreateEnum
CREATE TYPE "JenisKelamin" AS ENUM ('L', 'P');

-- CreateTable
CREATE TABLE "Admin" (
    "admin_id" SERIAL NOT NULL,
    "nama_admin" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "peran" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("admin_id")
);

-- CreateTable
CREATE TABLE "Karyawan" (
    "karyawan_id" SERIAL NOT NULL,
    "nama_karyawan" TEXT NOT NULL,
    "alamat" TEXT NOT NULL,
    "no_hp" TEXT NOT NULL,
    "email" TEXT,
    "jenis_kelamin" "JenisKelamin" NOT NULL,
    "status_kepegawaian" "StatusKepegawaian" NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Karyawan_pkey" PRIMARY KEY ("karyawan_id")
);

-- CreateTable
CREATE TABLE "Divisi" (
    "divisi_id" SERIAL NOT NULL,
    "nama_divisi" TEXT NOT NULL,
    "posisi" TEXT NOT NULL,
    "karyawan_id" INTEGER NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Divisi_pkey" PRIMARY KEY ("divisi_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Admin_email_key" ON "Admin"("email");

-- AddForeignKey
ALTER TABLE "Divisi" ADD CONSTRAINT "Divisi_karyawan_id_fkey" FOREIGN KEY ("karyawan_id") REFERENCES "Karyawan"("karyawan_id") ON DELETE RESTRICT ON UPDATE CASCADE;
