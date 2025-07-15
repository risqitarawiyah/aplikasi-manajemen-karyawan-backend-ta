const express = require("express");
const {
    getAllWaliKelas,
    getWaliKelasById,
    createWaliKelas,
    updateWaliKelas,
    deleteWaliKelas,
    getWaliKelasCount
} = require("./walikelas.service");

const router = express.Router();

// GET semua wali kelas
router.get("/", async (req, res) => {
    try {
        const list = await getAllWaliKelas();
        res.json(list);
    } catch (err) {
        res.status(500).send(err.message);
    }
});

// GET jumlah wali kelas
router.get("/count", async (req, res) => {
    try {
        const count = await getWaliKelasCount();
        res.json({ success: true, count });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
});

// GET wali kelas by ID
router.get("/:id", async (req, res) => {
    try {
        const result = await getWaliKelasById(parseInt(req.params.id));
        res.json(result);
    } catch (err) {
        res.status(404).send(err.message);
    }
});

// POST tambah wali kelas
router.post("/", async (req, res) => {
    try {
        const created = await createWaliKelas(req.body);
        res.status(201).json(created);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// PUT update wali kelas
router.put("/:id", async (req, res) => {
    try {
        const updated = await updateWaliKelas(parseInt(req.params.id), req.body);
        res.json(updated);
    } catch (err) {
        res.status(400).send(err.message);
    }
});

// DELETE wali kelas
router.delete("/:id", async (req, res) => {
    try {
        await deleteWaliKelas(parseInt(req.params.id));
        res.json({ message: "Wali kelas berhasil dihapus" });
    } catch (err) {
        res.status(400).send(err.message);
    }
});

module.exports = router;
