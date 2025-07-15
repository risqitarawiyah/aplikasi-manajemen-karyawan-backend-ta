const express = require("express");
const {
    getAllJabatans,
    getJabatanById,
    createJabatan,
    editJabatanById,
    deleteJabatanById,
    getJabatanCount
} = require("./jabatan.service");

const router = express.Router();

// GET semua jabatan
router.get("/", async (req, res) => {
    try {
        const jabatans = await getAllJabatans();
        res.status(200).json(jabatans);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// GET jumlah jabatan
router.get("/count", async (req, res) => {
    try {
        const count = await getJabatanCount();
        res.json({ success: true, count });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// GET jabatan berdasarkan ID
router.get("/:id", async (req, res) => {
    try {
        const jabatanId = parseInt(req.params.id);
        const jabatan = await getJabatanById(jabatanId);
        res.status(200).json(jabatan);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// POST buat jabatan
router.post("/", async (req, res) => {
    try {
        const newJabatan = await createJabatan(req.body);
        res.status(201).json(newJabatan);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// PUT update jabatan
router.put("/:id", async (req, res) => {
    try {
        const jabatanId = parseInt(req.params.id);
        const updatedJabatan = await editJabatanById(jabatanId, req.body);
        res.json(updatedJabatan);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// DELETE jabatan
router.delete("/:id", async (req, res) => {
    try {
        const jabatanId = parseInt(req.params.id);
        await deleteJabatanById(jabatanId);
        res.json({ message: "Jabatan berhasil dihapus" });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;
