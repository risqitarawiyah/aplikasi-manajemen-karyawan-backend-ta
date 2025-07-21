const { findDivisis, findDivisiById, insertDivisi, editDivisi, deleteDivisi, countDivisis } = require("./divisi.repository");

async function getAllDivisis() {
    return await findDivisis();
}

async function getDivisiById(id) {
    const divisi = await findDivisiById(id);
    if (!divisi) {
        throw Error("Divisi tidak ditemukan!");
    }
    return divisi;
}

async function createDivisi(data) {
    return await insertDivisi(data);
}

async function editDivisiById(id, data) {
    await getDivisiById(id); // Validasi eksistensi
    return await editDivisi(id, data);
}

async function deleteDivisiById(id) {
    await getDivisiById(id); // Validasi eksistensi
    return await deleteDivisi(id);
}

async function getDivisiCount() {
    return await countDivisis();
}

module.exports = {
    getAllDivisis,
    getDivisiById,
    createDivisi,
    editDivisiById,
    deleteDivisiById,
    getDivisiCount
};