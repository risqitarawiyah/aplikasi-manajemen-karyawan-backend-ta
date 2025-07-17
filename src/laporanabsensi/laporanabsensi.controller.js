const express = require("express");
const {
    getAllLaporan,
    getLaporanById,
    createLaporan,
    updateLaporan,
    deleteLaporan,
    getLaporanCount,
    filterLaporanByBulanTahun,
    generateLaporanOtomatis
} = require("./laporanabsensi.service");

const router = express.Router();

// POST generate laporan otomatis (letakkan sebelum `/:id`)
router.post("/generate", async (req, res) => {
    const { bulan, tahun } = req.body;
    if (!bulan || !tahun) return res.status(400).json({ error: "Bulan dan tahun wajib diisi." });

    try {
        const hasil = await generateLaporanOtomatis(parseInt(bulan), parseInt(tahun));
        res.status(201).json({ message: "Laporan berhasil dibuat", data: hasil });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//  GET semua laporan absensi
router.get("/", async (req, res) => {
    try {
        const data = await getAllLaporan();
        res.json(data);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

//  GET jumlah laporan
router.get("/count", async (req, res) => {
    try {
        const count = await getLaporanCount();
        res.json({ count });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

//  GET laporan berdasarkan bulan dan tahun
router.get("/filter/:bulan/:tahun", async (req, res) => {
    try {
        const { bulan, tahun } = req.params;
        const filtered = await filterLaporanByBulanTahun(parseInt(bulan), parseInt(tahun));
        res.json(filtered);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

//  GET laporan berdasarkan ID
router.get("/:id", async (req, res) => {
    try {
        const laporan = await getLaporanById(parseInt(req.params.id));
        res.json(laporan);
    } catch (err) {
        res.status(404).send(err.message);
    }
});

//  POST laporan baru
router.post("/", async (req, res) => {
    try {
        const result = await createLaporan(req.body);
        res.status(201).json(result);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

//  PUT update laporan
router.put("/:id", async (req, res) => {
    try {
        const updated = await updateLaporan(parseInt(req.params.id), req.body);
        res.json(updated);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

//  DELETE laporan
router.delete("/:id", async (req, res) => {
    try {
        await deleteLaporan(parseInt(req.params.id));
        res.json({ message: "Laporan berhasil dihapus" });
    } catch (err) {
        res.status(400).send(err.message);
    }
});

module.exports = router;
