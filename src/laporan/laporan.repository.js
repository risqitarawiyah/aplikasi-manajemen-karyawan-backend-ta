const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()

// Buat laporan baru
const createLaporan = async ({ tipe_laporan, isi_laporan, created_by }) => {
  return await prisma.laporan.create({
    data: {
      tipe_laporan,
      isi_laporan,
      created_by,
    },
  })
}

// Ambil semua laporan
const getAllLaporan = async () => {
  return await prisma.laporan.findMany({
    orderBy: { created_at: 'desc' },
  })
}

// Ambil laporan berdasarkan rentang tanggal (00:00:00 - 23:59:59)
const getLaporanByDateRange = async (startDate, endDate) => {
  const start = new Date(`${startDate}T00:00:00.000Z`)
  const end = new Date(`${endDate}T23:59:59.999Z`)
  
  return await prisma.laporan.findMany({
    where: {
      created_at: {
        gte: start,
        lte: end,
      },
    },
    orderBy: { created_at: 'desc' },
  })
}

// Hitung jumlah laporan
async function countLaporans() {
    return await prisma.laporan.count();
}

module.exports = {
  createLaporan,
  getAllLaporan,
  getLaporanByDateRange,
  countLaporans
}
