const express = require("express");
const {
    getAllJabatans,
    getJabatanById,
    createJabatan,
    editJabatanById,
    deleteJabatanById
} = require("./jabatan.service");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const jabatans = await getAllJabatans();
        res.status(200).json(jabatans);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/count', async (req, res) => {
    try {
        const jumlahJabatan = await prisma.jabatan.count(); // ✅ gunakan .count(), bukan .findUnique()
        res.json({ count: jumlahJabatan });
    } catch (error) {
        console.error('Gagal menghitung jumlah jabatan:', error);
        res.status(500).json({ message: 'Terjadi kesalahan saat menghitung jumlah jabatan' });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const jabatan = await getJabatanById(id);
        res.status(200).json(jabatan);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.post("/", async (req, res) => {
    try {
        const newJabatan = await createJabatan(req.body);
        res.status(201).json(newJabatan);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updated = await editJabatanById(id, req.body);
        res.json(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        const jabatan = await getJabatanById(id);
        if (!jabatan) {
            return res.status(404).json({ message: "Jabatan tidak ditemukan" });
        }

        // Cek apakah masih digunakan oleh karyawan
        const karyawanTerkait = await prisma.karyawan.findFirst({
            where: { jabatanId: id },
        });

        if (karyawanTerkait) {
            return res.status(400).json({
                message: "Jabatan tidak dapat dihapus karena masih digunakan oleh karyawan.",
            });
        }

        await deleteJabatanById(id);
        res.status(200).json({ message: "Jabatan berhasil dihapus" });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;