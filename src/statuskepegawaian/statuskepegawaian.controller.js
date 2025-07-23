const express = require("express");
const {
    getAllStatusKepegawaian,
    getStatusKepegawaianById,
    createStatusKepegawaian,
    editStatusKepegawaianById,
    deleteStatusKepegawaianById
} = require("./statuskepegawaian.service");

const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const data = await getAllStatusKepegawaian();
        res.status(200).json(data);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

router.get('/count', async (req, res) => {
    try {
        const jumlah = await prisma.statusKepegawaian.count();
        res.json({ count: jumlah });
    } catch (error) {
        console.error('Gagal menghitung jumlah status kepegawaian:', error);
        res.status(500).json({ message: 'Terjadi kesalahan saat menghitung jumlah' });
    }
});

router.get("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const data = await getStatusKepegawaianById(id);
        res.status(200).json(data);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.post("/", async (req, res) => {
    try {
        const newData = await createStatusKepegawaian(req.body);
        res.status(201).json(newData);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.put("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);
        const updated = await editStatusKepegawaianById(id, req.body);
        res.json(updated);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

router.delete("/:id", async (req, res) => {
    try {
        const id = parseInt(req.params.id);

        // Cek apakah masih digunakan oleh karyawan
        const karyawanTerkait = await prisma.karyawan.findFirst({
            where: { statusKepegawaianId: id },
        });

        if (karyawanTerkait) {
            return res.status(400).json({
                message: "Status kepegawaian tidak dapat dihapus karena masih digunakan oleh karyawan.",
            });
        }

        await deleteStatusKepegawaianById(id);
        res.status(200).json({ message: "Status kepegawaian berhasil dihapus" });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;
