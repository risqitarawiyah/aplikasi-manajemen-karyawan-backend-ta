const {
    findAllKelas,
    findKelasById,
    insertKelas,
    updateKelas,
    deleteKelas,
    countKelas
} = require('./kelas.repository');

async function getAllKelas() {
    return await findAllKelas();
}

async function getKelasById(id) {
    const kelas = await findKelasById(id);
    if (!kelas) throw Error("Kelas tidak ditemukan!");
    return kelas;
}

async function createKelas(data) {
    return await insertKelas(data);
}

async function editKelasById(id, data) {
    await getKelasById(id);
    return await updateKelas(id, data);
}

async function deleteKelasById(id) {
    await getKelasById(id);
    return await deleteKelas(id);
}

async function getKelasCount() {
    return await countKelas();
}

module.exports = {
    getAllKelas,
    getKelasById,
    createKelas,
    editKelasById,
    deleteKelasById,
    getKelasCount
};
