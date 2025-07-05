/*
  Warnings:

  - The primary key for the `Laporan` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `detail` on the `Laporan` table. All the data in the column will be lost.
  - You are about to drop the column `entitas` on the `Laporan` table. All the data in the column will be lost.
  - You are about to drop the column `entitasId` on the `Laporan` table. All the data in the column will be lost.
  - You are about to drop the column `id` on the `Laporan` table. All the data in the column will be lost.
  - You are about to drop the column `keterangan` on the `Laporan` table. All the data in the column will be lost.
  - You are about to drop the column `updated_at` on the `Laporan` table. All the data in the column will be lost.
  - The `created_at` column on the `Laporan` table would be dropped and recreated. This will lead to data loss if there is data in the column.
  - Added the required column `created_by` to the `Laporan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `isi_laporan` to the `Laporan` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tipe_laporan` to the `Laporan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Laporan" DROP CONSTRAINT "Laporan_pkey",
DROP COLUMN "detail",
DROP COLUMN "entitas",
DROP COLUMN "entitasId",
DROP COLUMN "id",
DROP COLUMN "keterangan",
DROP COLUMN "updated_at",
ADD COLUMN     "created_by" TEXT NOT NULL,
ADD COLUMN     "isi_laporan" JSONB NOT NULL,
ADD COLUMN     "laporan_id" SERIAL NOT NULL,
ADD COLUMN     "tipe_laporan" TEXT NOT NULL,
DROP COLUMN "created_at",
ADD COLUMN     "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ADD CONSTRAINT "Laporan_pkey" PRIMARY KEY ("laporan_id");
