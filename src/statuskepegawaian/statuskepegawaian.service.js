const {
    findAllStatusKepegawaian,
    findStatusKepegawaianById,
    insertStatusKepegawaian,
    updateStatusKepegawaian,
    deleteStatusKepegawaian,
    countStatusKepegawaian
} = require("./statuskepegawaian.repository");

async function getAllStatusKepegawaian() {
    return await findAllStatusKepegawaian();
}

async function getStatusKepegawaianById(id) {
    const status = await findStatusKepegawaianById(id);
    if (!status) throw Error("Status kepegawaian tidak ditemukan!");
    return status;
}

async function createStatusKepegawaian(data) {
    return await insertStatusKepegawaian(data);
}

async function editStatusKepegawaianById(id, data) {
    await getStatusKepegawaianById(id); // validasi dulu
    return await updateStatusKepegawaian(id, data);
}

async function deleteStatusKepegawaianById(id) {
    await getStatusKepegawaianById(id); // validasi dulu
    return await deleteStatusKepegawaian(id);
}

async function getStatusKepegawaianCount() {
    return await countStatusKepegawaian();
}

module.exports = {
    getAllStatusKepegawaian,
    getStatusKepegawaianById,
    createStatusKepegawaian,
    editStatusKepegawaianById,
    deleteStatusKepegawaianById,
    getStatusKepegawaianCount
};
