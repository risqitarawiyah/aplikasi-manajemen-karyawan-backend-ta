const {
    findAllWaliKelas,
    findWaliKelasById,
    insertWaliKelas,
    updateWaliKelasById,
    deleteWaliKelasById,
    countWaliKelas
} = require("./walikelas.repository");

async function getAllWaliKelas() {
    return await findAllWaliKelas();
}

async function getWaliKelasById(id) {
    const wali = await findWaliKelasById(id);
    if (!wali) throw Error("Data wali kelas tidak ditemukan");
    return wali;
}

async function createWaliKelas(data) {
    return await insertWaliKelas(data);
}

async function updateWaliKelas(id, data) {
    await getWaliKelasById(id);
    return await updateWaliKelasById(id, data);
}

async function deleteWaliKelas(id) {
    await getWaliKelasById(id);
    return await deleteWaliKelasById(id);
}

async function getWaliKelasCount() {
    return await countWaliKelas();
}

module.exports = {
    getAllWaliKelas,
    getWaliKelasById,
    createWaliKelas,
    updateWaliKelas,
    deleteWaliKelas,
    getWaliKelasCount
};
