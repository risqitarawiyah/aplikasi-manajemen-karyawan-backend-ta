const dashboardService = require('./dashboard.service');

// Fungsi untuk mengambil jumlah data dashboard
const getDashboardCounts = async (req, res) => {
  try {
    const data = await dashboardService.getCounts();

    // Pastikan data terisi, kalau tidak anggap 0 semua
    if (!data || Object.keys(data).length === 0) {
      return res.status(404).json({ message: 'Data dashboard tidak ditemukan' });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Gagal mengambil data dashboard:', error.message);
    res.status(500).json({ message: 'Terjadi kesalahan saat mengambil data dashboard' });
  }
};

module.exports = { getDashboardCounts };
