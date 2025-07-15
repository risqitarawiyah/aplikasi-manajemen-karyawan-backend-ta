const {
    findAllLaporan,
    findLaporanById,
    insertLaporan,
    updateLaporanById,
    deleteLaporanById,
    countLaporan,
    findByBulanTahun
} = require("./laporanabsensi.repository");

async function getAllLaporan() {
    return await findAllLaporan();
}

async function getLaporanById(id) {
    const laporan = await findLaporanById(id);
    if (!laporan) throw Error("Laporan tidak ditemukan");
    return laporan;
}

async function createLaporan(data) {
    return await insertLaporan(data);
}

async function updateLaporan(id, data) {
    await getLaporanById(id);
    return await updateLaporanById(id, data);
}

async function deleteLaporan(id) {
    await getLaporanById(id);
    return await deleteLaporanById(id);
}

async function getLaporanCount() {
    return await countLaporan();
}

async function filterLaporanByBulanTahun(bulan, tahun) {
    return await findByBulanTahun(bulan, tahun);
}

module.exports = {
    getAllLaporan,
    getLaporanById,
    createLaporan,
    updateLaporan,
    deleteLaporan,
    getLaporanCount,
    filterLaporanByBulanTahun
};
