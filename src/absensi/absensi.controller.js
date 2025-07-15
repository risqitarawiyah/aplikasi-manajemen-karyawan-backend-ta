const express = require("express");
const {
    getAllAbsensis,
    getAbsensiById,
    createAbsensi,
    updateAbsensi,
    deleteAbsensi,
    getAbsensiCount
} = require("./absensi.service");

const router = express.Router();

// GET semua absensi
router.get("/", async (req, res) => {
    try {
        const absensi = await getAllAbsensis();
        res.json(absensi);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// GET jumlah absensi
router.get("/count", async (req, res) => {
    try {
        const count = await getAbsensiCount();
        res.json({ success: true, count });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// GET absensi berdasarkan ID
router.get("/:id", async (req, res) => {
    try {
        const absensi = await getAbsensiById(parseInt(req.params.id));
        res.json(absensi);
    } catch (error) {
        res.status(404).send(error.message);
    }
});

// POST absensi baru
router.post("/", async (req, res) => {
    try {
        const newData = await createAbsensi(req.body);
        res.status(201).json(newData);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// PUT update absensi
router.put("/:id", async (req, res) => {
    try {
        const updated = await updateAbsensi(parseInt(req.params.id), req.body);
        res.json(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// DELETE absensi
router.delete("/:id", async (req, res) => {
    try {
        await deleteAbsensi(parseInt(req.params.id));
        res.json({ message: "Data absensi berhasil dihapus" });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;
