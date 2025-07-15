const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Ambil semua laporan
async function findAllLaporan() {
    return await prisma.laporanAbsensi.findMany({
        include: {
            karyawan: true
        },
        orderBy: {
            tahun: 'desc'
        }
    });
}

// Ambil satu laporan
async function findLaporanById(id) {
    return await prisma.laporanAbsensi.findUnique({
        where: { id },
        include: {
            karyawan: true
        }
    });
}

// Tambah laporan
async function insertLaporan(data) {
    return await prisma.laporanAbsensi.create({
        data: {
            karyawanId: parseInt(data.karyawanId),
            bulan: parseInt(data.bulan),
            tahun: parseInt(data.tahun),
            jumlah_hadir: parseInt(data.jumlah_hadir),
            jumlah_tidak_hadir: parseInt(data.jumlah_tidak_hadir),
            persentase: parseFloat(data.persentase)
        }
    });
}

// Update laporan
async function updateLaporanById(id, data) {
    return await prisma.laporanAbsensi.update({
        where: { id },
        data: {
            karyawanId: parseInt(data.karyawanId),
            bulan: parseInt(data.bulan),
            tahun: parseInt(data.tahun),
            jumlah_hadir: parseInt(data.jumlah_hadir),
            jumlah_tidak_hadir: parseInt(data.jumlah_tidak_hadir),
            persentase: parseFloat(data.persentase)
        }
    });
}

// Hapus laporan
async function deleteLaporanById(id) {
    return await prisma.laporanAbsensi.delete({
        where: { id }
    });
}

// Hitung jumlah laporan
async function countLaporan() {
    return await prisma.laporanAbsensi.count();
}

// Filter berdasarkan bulan & tahun
async function findByBulanTahun(bulan, tahun) {
    return await prisma.laporanAbsensi.findMany({
        where: {
            bulan,
            tahun
        },
        include: {
            karyawan: true
        }
    });
}

module.exports = {
    findAllLaporan,
    findLaporanById,
    insertLaporan,
    updateLaporanById,
    deleteLaporanById,
    countLaporan,
    findByBulanTahun
};
