/*
  Warnings:

  - You are about to drop the column `dibuatOleh` on the `Laporan` table. All the data in the column will be lost.
  - You are about to drop the column `dibuatPada` on the `Laporan` table. All the data in the column will be lost.
  - Added the required column `created_at` to the `Laporan` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Laporan" DROP COLUMN "dibuatOleh",
DROP COLUMN "dibuatPada",
ADD COLUMN     "created_at" TEXT NOT NULL,
ADD COLUMN     "updated_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP;
