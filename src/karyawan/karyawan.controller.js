const express = require("express");
const {
    getAllKaryawans,
    getKaryawanById,
    createKaryawan,
    editKaryawanById,
    deleteKaryawanById,
    getKaryawanCount
} = require("./karyawan.service");

const laporanService = require("../laporan/laporan.service");
const jwt = require("jsonwebtoken");
const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const router = express.Router();

// Ambil nama admin dari token
const ambilNamaAdminDariToken = (req) => {
    const token = req.headers.authorization?.split(" ")[1];
    if (!token) return "UNKNOWN";
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        return decoded.username || "UNKNOWN";
    } catch (e) {
        return "UNKNOWN";
    }
};

// GET all karyawan
router.get("/", async (req, res) => {
    try {
        const karyawans = await getAllKaryawans();
        res.status(200).json(karyawans);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Statistik jumlah karyawan
router.get("/count", async (req, res) => {
    try {
        const count = await getKaryawanCount();
        res.json({ success: true, count });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// GET karyawan by id
router.get("/:id", async (req, res) => {
    try {
        const karyawanId = parseInt(req.params.id);
        const karyawan = await getKaryawanById(karyawanId);
        res.status(200).json(karyawan);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// POST create karyawan
router.post("/", async (req, res) => {
    try {
        const newKaryawanData = req.body;
        const newKaryawan = await createKaryawan(newKaryawanData);

        const admin = ambilNamaAdminDariToken(req);
        await laporanService.buatLaporan({
        tipe_laporan: "PDF",
        isi_laporan: `Menambahkan data karyawan baru: ID ${newKaryawan.karyawan_id}, nama: ${newKaryawan.nama_karyawan}, status_pegawai: ${newKaryawan.status_kepegawaian}`,
        created_by: admin
        });

        res.status(201).json(newKaryawan);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// PUT update karyawan
router.put("/:id", async (req, res) => {
    try {
        const karyawanId = req.params.id;
        const karyawanData = req.body;
        const updatedKaryawan = await editKaryawanById(karyawanId, karyawanData);

        const admin = ambilNamaAdminDariToken(req);
        await laporanService.buatLaporan({
        tipe_laporan: "PDF",
        isi_laporan: `Mengedit data karyawan: ID ${updatedKaryawan.karyawan_id}, nama: ${updatedKaryawan.nama_karyawan}, status_pegawai: ${updatedKaryawan.status_kepegawaian}`,
        created_by: admin
        });

        res.json(updatedKaryawan);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// DELETE karyawan
router.delete("/:id", async (req, res) => {
    try {
        const karyawanId = parseInt(req.params.id);
        const karyawan = await getKaryawanById(karyawanId);
        if (!karyawan) {
        return res.status(404).json({ message: "Karyawan tidak ditemukan" });
        }

        // Ambil semua divisi yang akan ikut terhapus
        const divisis = await prisma.divisi.findMany({
        where: { karyawan_id: karyawanId }
        });

        // Hapus karyawan (otomatis hapus divisi via onDelete: Cascade)
        await deleteKaryawanById(karyawanId);

        const admin = ambilNamaAdminDariToken(req);
        const logs = [];

        // Log penghapusan karyawan
        logs.push({
        tipe_laporan: "PDF",
        isi_laporan: `Menghapus data karyawan: ID ${karyawan.karyawan_id}, nama: ${karyawan.nama_karyawan}, status_pegawai: ${karyawan.status_kepegawaian}`,
        created_by: admin
        });

        // Log penghapusan divisi-divisi terkait
        for (const divisi of divisis) {
        logs.push({
            tipe_laporan: "PDF",
            isi_laporan: `Divisi "${divisi.nama_divisi}" (posisi: ${divisi.posisi}) milik karyawan "${karyawan.nama_karyawan}" juga ikut terhapus.`,
            created_by: admin
        });
        }

        // Simpan semua laporan
        if (logs.length > 0) {
        await laporanService.buatBanyakLaporan(logs);
        }

        res.status(200).json({ message: "Karyawan dan divisinya berhasil dihapus" });
    } catch (error) {
        console.error("Gagal hapus karyawan:", error);
        res.status(400).send(error.message);
    }
});

module.exports = router;
