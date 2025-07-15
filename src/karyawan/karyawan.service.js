const {
    findKaryawans,
    findKaryawanById,
    insertKaryawan,
    editKaryawan,
    deleteKaryawan,
    countKaryawans
} = require("./karyawan.repository");

async function getAllKaryawans() {
    return await findKaryawans();
}

async function getKaryawanById(karyawan_id) {
    const karyawan = await findKaryawanById(karyawan_id);
    if (!karyawan) {
        throw Error("Karyawan tidak ditemukan!");
    }
    return karyawan;
}

async function createKaryawan(newKaryawanData) {
    return await insertKaryawan(newKaryawanData);
}

async function editKaryawanById(karyawan_id, karyawanData) {
    await getKaryawanById(karyawan_id); // validasi eksistensi
    return await editKaryawan(karyawan_id, karyawanData);
}

async function deleteKaryawanById(karyawan_id) {
    await getKaryawanById(karyawan_id); // validasi eksistensi
    return await deleteKaryawan(karyawan_id);
}

async function getKaryawanCount() {
    return await countKaryawans();
}

module.exports = {
    getAllKaryawans,
    getKaryawanById,
    createKaryawan,
    editKaryawanById,
    deleteKaryawanById,
    getKaryawanCount
};
