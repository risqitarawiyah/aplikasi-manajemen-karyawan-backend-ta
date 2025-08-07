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

// GET semua karyawan
router.get("/", async (req, res) => {
    try {
        const karyawans = await getAllKaryawans();
        res.status(200).json(karyawans);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// GET jumlah karyawan
router.get("/count", async (req, res) => {
    try {
        const count = await getKaryawanCount();
        res.json({ success: true, count });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// GET karyawan by ID
router.get("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const karyawan = await getKaryawanById(id);
        if (!karyawan) return res.status(404).json({ message: "Karyawan tidak ditemukan" });
        res.status(200).json(karyawan);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// POST tambah karyawan
router.post("/", async (req, res) => {
    try {
        const newKaryawan = await createKaryawan(req.body);
        res.status(201).json(newKaryawan);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// PUT edit karyawan
router.put("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updated = await editKaryawanById(id, req.body);
        res.json(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// DELETE karyawan (tanpa cek absensi)
router.delete("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const karyawan = await getKaryawanById(id);
        if (!karyawan) return res.status(404).json({ message: "Karyawan tidak ditemukan" });

        await deleteKaryawanById(id);
        res.status(200).json({ message: "Karyawan berhasil dihapus" });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;
