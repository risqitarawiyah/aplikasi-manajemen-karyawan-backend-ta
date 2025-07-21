const {
    findAllMapels,
    findMapelById,
    insertMapel,
    updateMapelById,
    deleteMapelById,
    countMapels
} = require("./mapel.repository");

async function getAllMapels() {
    try {
        return await findAllMapels();
    } catch (error) {
        throw new Error("Gagal mengambil data mapel: " + error.message);
    }
}

async function getMapelById(id) {
    try {
        const mapel = await findMapelById(parseInt(id));
        if (!mapel) throw new Error("Mapel tidak ditemukan");
        return mapel;
    } catch (error) {
        throw new Error("Gagal mengambil mapel: " + error.message);
    }
}

async function createMapel(data) {
    try {
        return await insertMapel(data);
    } catch (error) {
        throw new Error("Gagal menambahkan mapel: " + error.message);
    }
}

async function updateMapel(id, data) {
    try {
        await getMapelById(id); // pastikan mapel ada dulu
        return await updateMapelById(parseInt(id), data);
    } catch (error) {
        throw new Error("Gagal mengupdate mapel: " + error.message);
    }
}

async function deleteMapel(id) {
    try {
        await getMapelById(id); // pastikan mapel ada dulu
        return await deleteMapelById(parseInt(id));
    } catch (error) {
        throw new Error("Gagal menghapus mapel: " + error.message);
    }
}

async function getMapelCount() {
    try {
        return await countMapels();
    } catch (error) {
        throw new Error("Gagal menghitung data mapel: " + error.message);
    }
}

module.exports = {
    getAllMapels,
    getMapelById,
    createMapel,
    updateMapel,
    deleteMapel,
    getMapelCount
};
