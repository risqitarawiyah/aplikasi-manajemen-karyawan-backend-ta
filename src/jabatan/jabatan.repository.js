const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Read semua jabatan + relasi karyawan
async function findJabatans() {
    return await prisma.jabatan.findMany({
        include: { karyawan: true }
    });
}

// Read satu jabatan berdasarkan ID
async function findJabatanById(id) {
    return await prisma.jabatan.findUnique({
        where: { id: parseInt(id) },
        include: { karyawan: true }
    });
}

// Tambah jabatan
async function insertJabatan(data) {
    return await prisma.jabatan.create({
        data: {
            nama: data.nama
        }
    });
}

// Update jabatan
async function editJabatan(id, data) {
    return await prisma.jabatan.update({
        where: { id: parseInt(id) },
        data: {
            nama: data.nama
        }
    });
}

// Hapus jabatan
async function deleteJabatan(id) {
    return await prisma.jabatan.delete({
        where: { id: parseInt(id) }
    });
}

// Hitung jumlah jabatan
async function countJabatans() {
    return await prisma.jabatan.count();
}

module.exports = {
    findJabatans,
    findJabatanById,
    insertJabatan,
    editJabatan,
    deleteJabatan,
    countJabatans
};
