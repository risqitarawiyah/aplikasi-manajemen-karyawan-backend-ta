-- CreateTable
CREATE TABLE "Laporan" (
    "id" SERIAL NOT NULL,
    "keterangan" TEXT NOT NULL,
    "entitas" TEXT NOT NULL,
    "entitasId" INTEGER NOT NULL,
    "detail" JSONB NOT NULL,
    "dibuatOleh" TEXT NOT NULL,
    "dibuatPada" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Laporan_pkey" PRIMARY KEY ("id")
);
