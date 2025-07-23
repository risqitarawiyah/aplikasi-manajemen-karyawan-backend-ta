const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Ambil semua data
async function findAllWaliKelas() {
    return await prisma.waliKelas.findMany({
        include: {
        guru: {
            include: {
            karyawan: true
            }
        },
        kelas: true
        }
    });
}

// Ambil berdasarkan ID
async function findWaliKelasById(id) {
    return await prisma.waliKelas.findUnique({
        where: { id },
        include: {
        guru: {
            include: {
            karyawan: true
            }
        },
        kelas: true
        }
    });
}

// Tambah wali kelas
async function insertWaliKelas(data) {
    return await prisma.waliKelas.create({
        data: {
            guruId: data.guruId ? parseInt(data.guruId) : null,
            kelasId: data.kelasId ? parseInt(data.kelasId) : null,
            tahun_ajaran: data.tahun_ajaran || null
        }
    });
}

// Update
async function updateWaliKelasById(id, data) {
    return await prisma.waliKelas.update({
        where: { id },
        data: {
            guruId: data.guruId ? parseInt(data.guruId) : null,
            kelasId: data.kelasId ? parseInt(data.kelasId) : null,
            tahun_ajaran: data.tahun_ajaran || null
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
