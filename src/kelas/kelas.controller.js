const express = require('express');
const router = express.Router();
const {
    getAllKelas,
    getKelasById,
    createKelas,
    editKelasById,
    deleteKelasById,
    getKelasCount
} = require('./kelas.service');

// GET semua kelas
router.get('/', async (req, res) => {
    try {
        const data = await getAllKelas();
        res.json(data);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET count kelas
router.get('/count', async (req, res) => {
    try {
        const count = await getKelasCount();
        res.json({ count });
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
});

// GET kelas by ID
router.get('/:id', async (req, res) => {
    try {
        const data = await getKelasById(req.params.id);
        res.json(data);
    } catch (err) {
        res.status(404).json({ message: err.message });
    }
});

// POST tambah kelas
router.post('/', async (req, res) => {
    try {
        const data = await createKelas(req.body);
        res.status(201).json(data);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// PUT edit kelas
router.put('/:id', async (req, res) => {
    try {
        const data = await editKelasById(req.params.id, req.body);
        res.json(data);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

// DELETE hapus kelas
router.delete('/:id', async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        // Pastikan kelas ada
        const existing = await getKelasById(id);
        if (!existing) {
            return res.status(404).json({ message: "Kelas tidak ditemukan" });
        }

        // Cek apakah masih digunakan oleh wali_kelas
        if (existing.wali_kelas && existing.wali_kelas.length > 0) {
            return res.status(400).json({
                message: "Kelas tidak dapat dihapus karena masih memiliki wali kelas yang terkait."
            });
        }

        await deleteKelasById(id);
        res.json({ message: "Kelas berhasil dihapus" });
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
});

module.exports = router;
