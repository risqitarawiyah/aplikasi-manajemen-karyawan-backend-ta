const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Read semua data divisi dan karyawan yang ada di divisi itu
async function findDivisis() {
    return await prisma.divisi.findMany({
        include: {
            karyawan: true, // ini relasi dari model Prisma (huruf kecil)
        },
    });
}

// Read satu divisi berdasarkan ID
async function findDivisiById(id) {
    return await prisma.divisi.findUnique({
        where: { id: parseInt(id) },
        include: {
            karyawan: true,
        },
    });
}

// Tambah divisi (hanya nama)
async function insertDivisi(data) {
    return await prisma.divisi.create({
        data: {
            nama: data.nama,
        },
    });
}

// Update divisi berdasarkan ID
async function editDivisi(id, data) {
    return await prisma.divisi.update({
        where: { id: parseInt(id) },
        data: {
            nama: data.nama,
        },
    });
}

// Delete divisi
async function deleteDivisi(id) {
    return await prisma.divisi.delete({
        where: { id: parseInt(id) },
    });
}

// Hitung jumlah divisi
async function countDivisis() {
    return await prisma.divisi.count();
}

module.exports = {
    findDivisis,
    findDivisiById,
    insertDivisi,
    editDivisi,
    deleteDivisi,
    countDivisis
};