const {
    findJabatans,
    findJabatanById,
    insertJabatan,
    editJabatan,
    deleteJabatan,
    countJabatans
} = require("./jabatan.repository");

async function getAllJabatans() {
    return await findJabatans();
}

async function getJabatanById(id) {
    const jabatan = await findJabatanById(id);
    if (!jabatan) throw Error("Jabatan tidak ditemukan!");
    return jabatan;
}

async function createJabatan(data) {
    return await insertJabatan(data);
}

async function editJabatanById(id, data) {
    await getJabatanById(id);
    return await editJabatan(id, data);
}

async function deleteJabatanById(id) {
    await getJabatanById(id);
    return await deleteJabatan(id);
}

async function getJabatanCount() {
    return await countJabatans();
}

module.exports = {
    getAllJabatans,
    getJabatanById,
    createJabatan,
    editJabatanById,
    deleteJabatanById,
    getJabatanCount
};
