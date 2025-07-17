const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const {
    findAllLaporan,
    findLaporanById,
    insertLaporan,
    updateLaporanById,
    deleteLaporanById,
    countLaporan,
    findByBulanTahun
} = require("./laporanabsensi.repository");

// Fungsi untuk mengambil semua laporan
async function getAllLaporan() {
    return await findAllLaporan();
}

// Fungsi untuk mengambil laporan berdasarkan ID
async function getLaporanById(id) {
    const laporan = await findLaporanById(id);
    if (!laporan) throw Error("Laporan tidak ditemukan");
    return laporan;
}

// Fungsi untuk membuat laporan baru
async function createLaporan(data) {
    return await insertLaporan(data);
}

// Fungsi untuk mengupdate laporan berdasarkan ID
async function updateLaporan(id, data) {
    await getLaporanById(id); // Validasi keberadaan dulu
    return await updateLaporanById(id, data);
}

// Fungsi untuk menghapus laporan berdasarkan ID
async function deleteLaporan(id) {
    await getLaporanById(id); // Validasi keberadaan dulu
    return await deleteLaporanById(id);
}

// Fungsi untuk menghitung total laporan
async function getLaporanCount() {
    return await countLaporan();
}

// Fungsi untuk filter laporan berdasarkan bulan dan tahun
async function filterLaporanByBulanTahun(bulan, tahun) {
    return await findByBulanTahun(bulan, tahun);
}

// Fungsi untuk generate laporan otomatis
async function generateLaporanOtomatis(bulan, tahun) {
    const semuaKaryawan = await prisma.karyawan.findMany();
    const laporan = [];

    const startDate = new Date(tahun, bulan - 1, 1);
    const endDate = new Date(tahun, bulan, 0); // Tanggal terakhir di bulan tsb

    for (const karyawan of semuaKaryawan) {
        const absensi = await prisma.absensi.findMany({
            where: {
                karyawanId: karyawan.id,
                tanggal: {
                    gte: startDate,
                    lte: endDate
                }
            }
        });

        // Filter hanya absensi pada hari kerja (Senin - Sabtu)
        const absensiHariKerja = absensi.filter(a => {
            const day = new Date(a.tanggal).getDay();
            return day !== 0; // Minggu = 0, jadi exclude
        });

        const hadir = absensiHariKerja.filter(a => ["LP", "TW", "TD"].includes(a.status)).length;
        const tidakHadir = absensiHariKerja.length - hadir;
        const total = absensiHariKerja.length;

        const persentase = total > 0
            ? parseFloat(((hadir / total) * 100).toFixed(2))
            : 0;

        // Cek jika laporan sudah ada → skip
        const existing = await prisma.laporanAbsensi.findFirst({
            where: {
                karyawanId: karyawan.id,
                bulan,
                tahun
            }
        });

        if (!existing) {
            const created = await prisma.laporanAbsensi.create({
                data: {
                    karyawanId: karyawan.id,
                    bulan,
                    tahun,
                    jumlah_hadir: hadir,
                    jumlah_tidak_hadir: tidakHadir,
                    persentase
                }
            });
            laporan.push(created);
        }
    }
    return laporan;
}

module.exports = {
    getAllLaporan,
    getLaporanById,
    createLaporan,
    updateLaporan,
    deleteLaporan,
    getLaporanCount,
    filterLaporanByBulanTahun,
    generateLaporanOtomatis
};
