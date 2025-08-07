const { PrismaClient } = require("@prisma/client");
const prisma = new PrismaClient();
const {
  findAllGurus,
  findGuruById,
  insertGuru,
  updateGuruById,
  deleteGuruById,
  countGurus
} = require("./guru.repository");

// Ambil semua guru
async function getAllGurus() {
  return await findAllGurus();
}

// Ambil satu guru berdasarkan ID
async function getGuruById(id) {
  const guru = await findGuruById(id);
  if (!guru) throw Error("Data guru tidak ditemukan");
  return guru;
}

async function createGuru(data) {
  console.log("Data diterima:", data);

  // Validasi enum penempatan
  if (!["SATMINKAL", "NON_SATMINKAL"].includes(data.penempatan?.toUpperCase())) {
    throw new Error("Penempatan harus berupa 'SATMINKAL' atau 'NON_SATMINKAL'");
  }

  // Cek apakah karyawan memang guru
  const karyawan = await prisma.karyawan.findUnique({
    where: { id: parseInt(data.karyawanId) },
    include: { divisi: true },
  });

  console.log("Karyawan ditemukan:", karyawan);

  if (!karyawan) throw new Error("Karyawan tidak ditemukan");

  if (karyawan.divisi?.nama?.trim().toLowerCase() !== "guru") {
    throw new Error("Hanya karyawan dengan divisi 'Guru' yang bisa ditambahkan sebagai guru");
  }

  return await insertGuru({
    karyawanId: data.karyawanId,
    mapelId: data.mapelId,
    jumlahJtm: data.jumlahJtm,
    penempatan: data.penempatan.toUpperCase(),
  });
}

// Update guru berdasarkan ID
async function updateGuru(id, data) {
  await getGuruById(id); // Pastikan data ada dulu

  if (data.penempatan && !["SATMINKAL", "NON_SATMINKAL"].includes(data.penempatan?.toUpperCase())) {
    throw new Error("Penempatan harus berupa 'SATMINKAL' atau 'NON_SATMINKAL'");
  }

  return await updateGuruById(id, {
    mapelId: data.mapelId,
    jumlahJtm: data.jumlahJtm,
    penempatan: data.penempatan?.toUpperCase()
  });
}

// Hapus guru berdasarkan ID
async function deleteGuru(id) {
  await getGuruById(id);
  return await deleteGuruById(id);
}

// Hitung jumlah guru
async function getGuruCount() {
  return await countGurus();
}

module.exports = {
  getAllGurus,
  getGuruById,
  createGuru,
  updateGuru,
  deleteGuru,
  getGuruCount
};
