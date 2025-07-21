const express = require("express");
const {
    getAllDivisis,
    getDivisiById,
    createDivisi,
    editDivisiById,
    deleteDivisiById,
    getDivisiCount
} = require("./divisi.service");

const router = express.Router();

// GET all divisi
router.get("/", async (req, res) => {
    try {
        const divisis = await getAllDivisis();
        res.status(200).send(divisis);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// GET jumlah divisi
router.get('/count', async (req, res) => {
    try {
        const count = await getDivisiCount();
        res.json({ success: true, count });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

// GET divisi by ID
router.get("/:id", async (req, res) => {
    try {
        const divisiId = parseInt(req.params.id);
        const divisi = await getDivisiById(divisiId);
        res.status(200).send(divisi);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

// POST create divisi
router.post("/", async (req, res) => {
    try {
        const newDivisiData = req.body;
        const newDivisi = await createDivisi(newDivisiData);
        res.status(201).json(newDivisi);
    } catch (error) {
        console.error('Gagal menambah divisi:', error.message);
        res.status(400).send(error.message);
    }
});

// PUT update divisi
router.put("/:id", async (req, res) => {
    try {
        const divisiId = parseInt(req.params.id);
        const divisiData = req.body;
        const updatedDivisi = await editDivisiById(divisiId, divisiData);
        res.send(updatedDivisi);
    } catch (error) {
        console.error('Gagal update divisi:', error.message);
        res.status(400).send(error.message);
    }
});

// DELETE divisi
router.delete("/:id", async (req, res) => {
    try {
        const divisiId = parseInt(req.params.id);

        const divisi = await getDivisiById(divisiId);
        if (!divisi) {
            return res.status(404).json({ message: "Divisi tidak ditemukan" });
        }

        await deleteDivisiById(divisiId);
        res.status(200).json({ message: "Divisi berhasil dihapus" });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;