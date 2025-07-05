const express = require("express");
const { getAllDivisis, getDivisiById, createDivisi, editDivisiById, deleteDivisiById, getDivisiCount } = require("./divisi.service");
const laporanService = require('../laporan/laporan.service');
const jwt = require('jsonwebtoken');
const router = express.Router();

//fungsi bantu untuk ambil nama admin dari token
const ambilNamaAdminDariToken = (req) => {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) return 'UNKNOWN';
    try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.username || 'UNKNOWN';
    } catch (e) {
        return 'UNKNOWN';
    }
};

//get all divisi
router.get("/", async (req, res) => {
    try {
        const divisis = await getAllDivisis();
        res.status(200).send(divisis);
    } catch (error) {
        res.status(500).send(error.message);
    }
});

// Statistik jumlah divisi
router.get('/count', async (req, res) => {
    try {
        const count = await getDivisiCount();
        res.json({ success: true, count });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

//get divisi by id
router.get("/:divisi_id", async (req, res) => {
    try {
        const divisiId = parseInt(req.params.divisi_id);
        const divisi = await getDivisiById(divisiId);
        res.status(200).send(divisi);
    } catch (error) {
        res.status(400).send(error.message);
    }
});

//create divisi
router.post("/", async (req, res) => {
    try {
        const newDivisiData = req.body;
        const newDivisi = await createDivisi(newDivisiData);

        // ambil nama admin dari token
        const admin = ambilNamaAdminDariToken(req);

        //ambil info krywn terkait
        const prisma = require('../db'); // pastikan path ini sesuai dengan prisma kamu
        const karyawan = await prisma.karyawan.findUnique({
            where: { karyawan_id: newDivisi.karyawan_id },
        });

        //catat/ambil laporan
        await laporanService.buatLaporan({
            tipe_laporan: 'PDF',
            isi_laporan: `Menambahkan divisi baru: ID ${newDivisi.divisi_id}, nama: ${newDivisi.nama_divisi}, pemilik: Karyawan ID ${karyawan.karyawan_id}, nama: ${karyawan.nama_karyawan} `,
            created_by: admin
        });

        res.status(201).json(newDivisi);
    } catch (error) {
        console.error('Gagal menambah divisi:', error.message);
        res.status(400).send(error.message);
    }
});

//update divisi
router.put("/:divisi_id", async (req, res) => {
    try {
        const divisiId = parseInt(req.params.divisi_id);
        const divisiData = req.body;
        const updatedDivisi = await editDivisiById(divisiId, divisiData);

        // ambil nama admin
        const admin = ambilNamaAdminDariToken(req);

        // ambil nama karyawan (pemilik data)
        const prisma = require('../db'); // pastikan ini mengarah ke instance Prisma
        const karyawan = await prisma.karyawan.findUnique({
        where: { karyawan_id: updatedDivisi.karyawan_id },
        });

        await laporanService.buatLaporan({
        tipe_laporan: 'PDF',
        isi_laporan: `Mengedit divisi: ID ${updatedDivisi.divisi_id}, nama: ${updatedDivisi.nama_divisi}, pemilik: Karyawan ID ${karyawan.karyawan_id}, nama: ${karyawan.nama_karyawan}`,
        created_by: admin
        });

        res.send(updatedDivisi);
    } catch (error) {
        console.error('Gagal update divisi:', error.message)
        res.status(400).send(error.message);
    }
});


//delete divisi
router.delete("/:divisi_id", async (req, res) => {
    try {
        const divisiId = req.params.divisi_id;

        //ambil data divisi sebelum dihapus
        const prisma = require('../db');
        const divisi = await prisma.divisi.findUnique({
            where: { divisi_id: parseInt(divisiId) },
        });

        if (!divisi) {
            return res.status(404).json({ message: "Divisi tidak ditemukan" });
        }

        //ambil data karyawan pemilik
        const karyawan = await prisma.karyawan.findUnique({
            where: { karyawan_id: divisi.karyawan_id },
        });

        //hapus divisi
        await deleteDivisiById(divisiId);

        //catat laporan
        const admin = ambilNamaAdminDariToken(req);
        await laporanService.buatLaporan({
            tipe_laporan: 'PDF',
            isi_laporan: `Menghapus divisi: ID ${divisi.divisi_id}, nama: ${divisi.nama_divisi}, pemilik: Karyawan ID ${karyawan.karyawan_id}, nama: ${karyawan.nama_karyawan}`,
            created_by: admin
        });
        res.status(200).json({ message: "Divisi berhasil dihapus" });
    } catch (error) {
        res.status(400).send(error.message);
    }
});

module.exports = router;