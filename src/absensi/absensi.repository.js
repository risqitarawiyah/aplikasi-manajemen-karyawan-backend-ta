const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Ambil semua data absensi
async function findAllAbsensi() {
    return await prisma.absensi.findMany({
        include: {
            karyawan: true
        },
        orderBy: {
            tanggal: 'desc'
        }
    });
}

// Ambil satu data absensi
async function findAbsensiById(id) {
    return await prisma.absensi.findUnique({
        where: { id },
        include: {
            karyawan: true
        }
    });
}

// Tambah absensi
async function insertAbsensi(data) {
    return await prisma.absensi.create({
        data: {
            tanggal: new Date(data.tanggal),
            status: data.status,
            karyawanId: parseInt(data.karyawanId)
        }
    });
}

// Update absensi
async function updateAbsensiById(id, data) {
    return await prisma.absensi.update({
        where: { id },
        data: {
            tanggal: new Date(data.tanggal),
            status: data.status,
            karyawanId: parseInt(data.karyawanId)
        }
    });
}

// Delete absensi
async function deleteAbsensiById(id) {
    return await prisma.absensi.delete({
        where: { id }
    });
}

// Hitung jumlah absensi
async function countAbsensi() {
    return await prisma.absensi.count();
}

module.exports = {
    findAllAbsensi,
    findAbsensiById,
    insertAbsensi,
    updateAbsensiById,
    deleteAbsensiById,
    countAbsensi
};
