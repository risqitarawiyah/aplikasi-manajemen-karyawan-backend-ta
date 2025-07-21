const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Read semua data karyawan
async function findKaryawans() {
    return await prisma.karyawan.findMany({
        include: {
            divisi: true,
            jabatan: true
        }
    });
}

// Read karyawan berdasarkan id
async function findKaryawanById(id) {
    return await prisma.karyawan.findUnique({
        where: { id: parseInt(id) },
        include: {
            divisi: true,
            jabatan: true
        }
    });
}

// Tambah karyawan
async function insertKaryawan(data) {
    return await prisma.karyawan.create({
        data: {
            nama: data.nama,
            alamat: data.alamat,
            no_hp: data.no_hp,
            email: data.email,
            jenis_kelamin: data.jenis_kelamin,
            status_kepegawaian: data.status_kepegawaian,
            divisiId: parseInt(data.divisiId),
            jabatanId: parseInt(data.jabatanId),
        }
    });
}

// Update karyawan berdasarkan id
async function editKaryawan(id, data) {
    return await prisma.karyawan.update({
        where: { id: parseInt(id) },
        data: {
            nama: data.nama,
            alamat: data.alamat,
            no_hp: data.no_hp,
            email: data.email,
            jenis_kelamin: data.jenis_kelamin,
            status_kepegawaian: data.status_kepegawaian,
            divisiId: parseInt(data.divisiId),
            jabatanId: parseInt(data.jabatanId),
        }
    });
}

// Delete karyawan
async function deleteKaryawan(id) {
    return await prisma.karyawan.delete({
        where: { id: parseInt(id) }
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