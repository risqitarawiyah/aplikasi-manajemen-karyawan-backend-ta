const dashboardService = require('./dashboard.service');

exports.getDashboardCount = async (req, res) => {
  try {
    const data = await dashboardService.getCounts();

    if (!data) {
      return res.status(404).json({ message: 'Data dashboard tidak ditemukan' });
    }

    res.status(200).json(data);
  } catch (error) {
    console.error('Error in dashboard.controller:', error.message);
    res.status(500).json({ message: 'Terjadi kesalahan saat mengambil data dashboard' });
  }
};
