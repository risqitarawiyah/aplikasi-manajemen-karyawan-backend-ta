const express = require('express');
const router = express.Router();
const laporanService = require('./laporan.service');

// Ambil semua laporan
router.get('/', async (req, res) => {
  try {
    const laporan = await laporanService.ambilSemuaLaporan();
    res.json({ success: true, data: laporan });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Ambil laporan berdasarkan rentang tanggal
router.get('/filter', async (req, res) => {
  const { dari, sampai } = req.query;

  if (!dari || !sampai) {
    return res.status(400).json({ success: false, error: 'Tanggal tidak lengkap' });
  }

  try {
    const laporan = await laporanService.ambilLaporanBerdasarkanTanggal(dari, sampai);
    res.json({ success: true, data: laporan });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Buat laporan baru
router.post('/', async (req, res) => {
  const { tipe_laporan, isi_laporan, created_by } = req.body;

  if (!tipe_laporan || !isi_laporan || !created_by) {
    return res.status(400).json({ success: false, error: 'Data laporan tidak lengkap' });
  }

  try {
    const laporan = await laporanService.buatLaporan({ tipe_laporan, isi_laporan, created_by });
    res.status(201).json({ success: true, data: laporan });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// Statistik jumlah laporan
router.get('/count', async (req, res) => {
  try {
    const count = await laporanService.getLaporanCount(); // ✅ perbaikan di sini
    res.json({ success: true, count });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

module.exports = router;
