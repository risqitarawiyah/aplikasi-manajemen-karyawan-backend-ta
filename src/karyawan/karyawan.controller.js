const express = require("express");
const {
    getAllKaryawans,
    getKaryawanById,
    createKaryawan,
    editKaryawanById,
    deleteKaryawanById,
    getKaryawanCount
} = require("./karyawan.service");

const router = express.Router();

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
        res.status(201).json(newKaryawan);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// PUT update karyawan
router.put("/:id", async (req, res) => {
    try {
        const karyawanId = parseInt(req.params.id);
        const karyawanData = req.body;
        const updatedKaryawan = await editKaryawanById(karyawanId, karyawanData);
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

        await deleteKaryawanById(karyawanId);
        res.status(200).json({ message: "Karyawan berhasil dihapus" });
    } catch (error) {
        console.error("Gagal hapus karyawan:", error);
        res.status(400).send(error.message);
    }
});

module.exports = router;
