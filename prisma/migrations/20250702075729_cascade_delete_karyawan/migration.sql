-- DropForeignKey
ALTER TABLE "Divisi" DROP CONSTRAINT "Divisi_karyawan_id_fkey";

-- AddForeignKey
ALTER TABLE "Divisi" ADD CONSTRAINT "Divisi_karyawan_id_fkey" FOREIGN KEY ("karyawan_id") REFERENCES "Karyawan"("karyawan_id") ON DELETE CASCADE ON UPDATE CASCADE;
