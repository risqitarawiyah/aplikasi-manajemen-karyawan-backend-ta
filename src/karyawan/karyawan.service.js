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

async function getKaryawanById(id) {
    const karyawan = await findKaryawanById(id);
    if (!karyawan) throw Error("Karyawan tidak ditemukan!");
    return karyawan;
}

async function createKaryawan(data) {
    return await insertKaryawan(data);
}

async function editKaryawanById(id, data) {
    await getKaryawanById(id);
    return await editKaryawan(id, data);
}

async function deleteKaryawanById(id) {
    await getKaryawanById(id);
    return await deleteKaryawan(id);
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
