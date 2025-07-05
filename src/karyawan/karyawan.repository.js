const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Read semua data karyawan
async function findKaryawans() {
    return await prisma.karyawan.findMany();
}

// Read karyawan berdasarkan id
async function findKaryawanById(karyawan_id) {
    return await prisma.karyawan.findUnique({
        where: { karyawan_id: parseInt(karyawan_id) }
    });
}

// Tambah karyawan
async function insertKaryawan(karyawanData) {
    return await prisma.karyawan.create({
        data: {
            nama_karyawan: karyawanData.nama_karyawan,
            alamat: karyawanData.alamat,
            no_hp: karyawanData.no_hp,
            email: karyawanData.email,
            jenis_kelamin: karyawanData.jenis_kelamin,
            status_kepegawaian: karyawanData.status_kepegawaian,
        }
    });
}

// Update karyawan berdasarkan id
async function editKaryawan(karyawan_id, karyawanData) {
    return await prisma.karyawan.update({
        where: { karyawan_id: parseInt(karyawan_id) },
        data: {
            nama_karyawan: karyawanData.nama_karyawan,
            alamat: karyawanData.alamat,
            no_hp: karyawanData.no_hp,
            email: karyawanData.email,
            jenis_kelamin: karyawanData.jenis_kelamin,
            status_kepegawaian: karyawanData.status_kepegawaian,
        }
    });
}

// Delete karyawan
async function deleteKaryawan(karyawan_id) {
    await prisma.karyawan.delete({
        where: { karyawan_id: parseInt(karyawan_id) }
    });
}

// Hitung jumlah karyawan
async function countKaryawans() {
    return await prisma.karyawan.count();
}

module.exports = {
    findKaryawans,
    findKaryawanById,
    insertKaryawan,
    editKaryawan,
    deleteKaryawan,
    countKaryawans
};
