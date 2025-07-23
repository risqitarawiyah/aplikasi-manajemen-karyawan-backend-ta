const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();

// Ambil semua data guru
async function findAllGurus() {
  return await prisma.guru.findMany({
    include: {
      karyawan: true,
      mapel: true,
    },
    orderBy: {
      karyawan: {
        nama: 'asc'
      }
    }
  });
}

// Ambil satu guru berdasarkan ID
async function findGuruById(id) {
  return await prisma.guru.findUnique({
    where: { id },
    include: {
      karyawan: true,
      mapel: true,
    }
  });
}

// Tambah data guru
async function insertGuru(data) {
  return await prisma.guru.create({
    data: {
      karyawanId: parseInt(data.karyawanId),
      mapelId: parseInt(data.mapelId),
      jumlahJtm: data.jumlahJtm ? parseInt(data.jumlahJtm) : null,
      penempatan: data.penempatan
    }
  });
}

// Update data guru berdasarkan ID
async function updateGuruById(id, data) {
  return await prisma.guru.update({
    where: { id },
    data: {
      mapelId: data.mapelId,
      jumlahJtm: data.jumlahJtm,
      penempatan: data.penempatan
    }
  });
}

// Hapus guru berdasarkan ID
async function deleteGuruById(id) {
  return await prisma.guru.delete({
    where: { id }
  });
}

// Hitung total data guru
async function countGurus() {
  return await prisma.guru.count();
}

module.exports = {
  findAllGurus,
  findGuruById,
  insertGuru,
  updateGuruById,
  deleteGuruById,
  countGurus
};
