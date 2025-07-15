const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Ambil semua data
async function findAllWaliKelas() {
    return await prisma.waliKelas.findMany({
        include: { karyawan: true }
    });
}

// Ambil berdasarkan ID
async function findWaliKelasById(id) {
    return await prisma.waliKelas.findUnique({
        where: { id },
        include: { karyawan: true }
    });
}

// Tambah wali kelas
async function insertWaliKelas(data) {
    return await prisma.waliKelas.create({
        data: {
            karyawanId: parseInt(data.karyawanId),
            kelas: data.kelas,
            jumlah_siswa: parseInt(data.jumlah_siswa)
        }
    });
}

// Update
async function updateWaliKelasById(id, data) {
    return await prisma.waliKelas.update({
        where: { id },
        data: {
            karyawanId: parseInt(data.karyawanId),
            kelas: data.kelas,
            jumlah_siswa: parseInt(data.jumlah_siswa)
        }
    });
}

// Delete
async function deleteWaliKelasById(id) {
    return await prisma.waliKelas.delete({
        where: { id }
    });
}

// Count
async function countWaliKelas() {
    return await prisma.waliKelas.count();
}

module.exports = {
    findAllWaliKelas,
    findWaliKelasById,
    insertWaliKelas,
    updateWaliKelasById,
    deleteWaliKelasById,
    countWaliKelas
};
