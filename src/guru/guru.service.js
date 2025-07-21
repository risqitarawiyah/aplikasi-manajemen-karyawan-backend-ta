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

// Tambah guru baru
async function createGuru(data) {
  // Validasi enum penempatan
  if (!["SATMINKAL", "NON_SATMINKAL"].includes(data.penempatan?.toUpperCase())) {
    throw new Error("Penempatan harus berupa 'SATMINKAL' atau 'NON_SATMINKAL'");
  }

  return await insertGuru({
    karyawanId: data.karyawanId,
      mapelId: data.mapelId,
      jumlahJtm: data.jumlahJtm,
      penempatan: data.penempatan.toUpperCase()
  });
}

// Update guru berdasarkan ID
async function updateGuru(id, data) {
  await getGuruById(id); // Pastikan data ada dulu

  if (data.penempatan && !["SATMINKAL", "NON_SATMINKAL"].includes(data.penempatan?.toUpperCase())) {
    throw new Error("Penempatan harus berupa 'SATMINKAL' atau 'NON_SATMINKAL'");
  }

  return await updateGuruById(id, {
    nama: data.nama,
    email: data.email,
    no_hp: data.no_hp,
    alamat: data.alamat,
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
