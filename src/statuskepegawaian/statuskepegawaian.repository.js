const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Read semua status kepegawaian + relasi karyawan
async function findAllStatusKepegawaian() {
    return await prisma.statusKepegawaian.findMany({
        include: { karyawans: true },
        orderBy: { nama: 'asc' }
    });
}

// Read satu status kepegawaian berdasarkan ID
async function findStatusKepegawaianById(id) {
    return await prisma.statusKepegawaian.findUnique({
        where: { id: parseInt(id) },
        include: { karyawans: true }
    });
}

// Tambah status kepegawaian
async function insertStatusKepegawaian(data) {
    return await prisma.statusKepegawaian.create({
        data: {
            nama: data.nama
        }
    });
}

// Update status kepegawaian
async function updateStatusKepegawaian(id, data) {
    return await prisma.statusKepegawaian.update({
        where: { id: parseInt(id) },
        data: {
            nama: data.nama
        }
    });
}

// Hapus status kepegawaian
async function deleteStatusKepegawaian(id) {
    return await prisma.statusKepegawaian.delete({
        where: { id: parseInt(id) }
    });
}

// Hitung jumlah status kepegawaian
async function countStatusKepegawaian() {
    return await prisma.statusKepegawaian.count();
}

module.exports = {
    findAllStatusKepegawaian,
    findStatusKepegawaianById,
    insertStatusKepegawaian,
    updateStatusKepegawaian,
    deleteStatusKepegawaian,
    countStatusKepegawaian
};
