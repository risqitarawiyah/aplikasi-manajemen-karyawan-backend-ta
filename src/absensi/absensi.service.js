const {
    findAllAbsensi,
    findAbsensiById,
    insertAbsensi,
    updateAbsensiById,
    deleteAbsensiById,
    countAbsensi
} = require("./absensi.repository");

async function getAllAbsensis() {
    return await findAllAbsensi();
}

async function getAbsensiById(id) {
    const absensi = await findAbsensiById(id);
    if (!absensi) throw Error("Data absensi tidak ditemukan");
    return absensi;
}

async function createAbsensi(data) {
    return await insertAbsensi(data);
}

async function updateAbsensi(id, data) {
    await getAbsensiById(id); // Validasi dulu
    return await updateAbsensiById(id, data);
}

async function deleteAbsensi(id) {
    await getAbsensiById(id);
    return await deleteAbsensiById(id);
}

async function getAbsensiCount() {
    return await countAbsensi();
}

module.exports = {
    getAllAbsensis,
    getAbsensiById,
    createAbsensi,
    updateAbsensi,
    deleteAbsensi,
    getAbsensiCount
};
