const laporanRepo = require('./laporan.repository');

// Membuat satu laporan
const buatLaporan = async ({ tipe_laporan, isi_laporan, created_by }) => {
  return await laporanRepo.createLaporan({
    tipe_laporan,
    isi_laporan,
    created_by,
  });
};

// Membuat banyak laporan sekaligus
const buatBanyakLaporan = async (listLaporan) => {
  return await laporanRepo.createBanyakLaporan(listLaporan);
};

// Ambil semua laporan
const ambilSemuaLaporan = async () => {
  return await laporanRepo.getAllLaporan();
};

// Ambil laporan berdasarkan rentang tanggal
const ambilLaporanBerdasarkanTanggal = async (dari, sampai) => {
  return await laporanRepo.getLaporanByDateRange(dari, sampai);
};

// Hitung jumlah total laporan
const getLaporanCount = async () => {
  return await laporanRepo.countLaporans();
};

module.exports = {
  buatLaporan,
  buatBanyakLaporan,
  ambilSemuaLaporan,
  ambilLaporanBerdasarkanTanggal,
  getLaporanCount
};
