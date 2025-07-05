const laporanRepo = require('./laporan.repository');

// Membuat laporan baru
const buatLaporan = async ({ tipe_laporan, isi_laporan, created_by }) => {
  return await laporanRepo.createLaporan({
    tipe_laporan,
    isi_laporan,
    created_by,
  });
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
  ambilSemuaLaporan,
  ambilLaporanBerdasarkanTanggal,
  getLaporanCount
};
