const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Ambil semua data mapel
async function findAllMapels() {
    return await prisma.mapel.findMany({
        include: { guru: true }
    });
}

// Ambil satu mapel berdasarkan ID
async function findMapelById(id) {
    return await prisma.mapel.findUnique({
        where: { id: parseInt(id) },
        include: { guru: true }
    });
}

// Tambah data mapel
async function insertMapel(data) {
    return await prisma.mapel.create({
        data: {
            nama: data.nama
        }
    });
}

// Update data mapel berdasarkan ID
async function updateMapelById(id, data) {
    return await prisma.mapel.update({
        where: { id: parseInt(id) },
        data: {
            nama: data.nama
        }
    });
}

// Hapus mapel berdasarkan ID
async function deleteMapelById(id) {
    return await prisma.mapel.delete({
        where: { id: parseInt(id) }
    });
}

// Hitung total data mapel
async function countMapels() {
    return await prisma.mapel.count();
}

module.exports = {
    findAllMapels,
    findMapelById,
    insertMapel,
    updateMapelById,
    deleteMapelById,
    countMapels
};
