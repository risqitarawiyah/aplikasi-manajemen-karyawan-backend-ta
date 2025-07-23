const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Read semua kelas + relasi wali_kelas
async function findAllKelas() {
    return await prisma.kelas.findMany({
        include: { wali_kelas: true }
    });
}

// Read satu kelas berdasarkan ID
async function findKelasById(id) {
    return await prisma.kelas.findUnique({
        where: { id: parseInt(id) },
        include: { wali_kelas: true }
    });
}

// Tambah kelas
async function insertKelas(data) {
    return await prisma.kelas.create({
        data: {
            tingkat: parseInt(data.tingkat),
            jurusan: data.jurusan,
            ruang: data.ruang,
            jumlah_siswa: parseInt(data.jumlah_siswa),
        }
    });
}

// Update kelas
async function updateKelas(id, data) {
    return await prisma.kelas.update({
        where: { id: parseInt(id) },
        data: {
            tingkat: parseInt(data.tingkat),
            jurusan: data.jurusan,
            ruang: data.ruang,
            jumlah_siswa: parseInt(data.jumlah_siswa),
        }
    });
}

// Hapus kelas
async function deleteKelas(id) {
    return await prisma.kelas.delete({
        where: { id: parseInt(id) }
    });
}

// Hitung jumlah kelas
async function countKelas() {
    return await prisma.kelas.count();
}

module.exports = {
    findAllKelas,
    findKelasById,
    insertKelas,
    updateKelas,
    deleteKelas,
    countKelas
};
