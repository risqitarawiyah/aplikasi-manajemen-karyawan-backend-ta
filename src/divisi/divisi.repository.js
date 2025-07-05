const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

//read semua data divisi termasuk nama karyawan
async function findDivisis() {
    const divisis = await prisma.divisi.findMany({
        include: {
            Karyawan: true, //relasi ke karyawan
        },
    });
    return divisis;
}

//read divisi berdasarkan id
async function findDivisiById(divisi_id) {
    const divisi = await prisma.divisi.findUnique({ where: { divisi_id: parseInt(divisi_id), },
    include: { Karyawan: true },
});
return divisi;
}

//tambah divisi
async function insertDivisi(divisiData) {
    const newDivisi = await prisma.divisi.create({
        data: {
            nama_divisi: divisiData.nama_divisi,
            posisi: divisiData.posisi,
            karyawan_id: parseInt(divisiData.karyawan_id),
        },
    });
    return newDivisi;
}

//update divisi berdasarkan id
async function editDivisi(divisi_id, divisiData) {
    const updatedDivisi = await prisma.divisi.update({ where: { divisi_id: parseInt(divisi_id), },
    data: {
            nama_divisi: divisiData.nama_divisi,
            posisi: divisiData.posisi,
            karyawan_id: parseInt(divisiData.karyawan_id),
    },
});
return updatedDivisi;
}

//delete divisi
async function deleteDivisi(divisi_id) {
    await prisma.divisi.delete({ where: { divisi_id: parseInt(divisi_id), },
});
}

// Hitung jumlah karyawan
async function countDivisis() {
    return await prisma.divisi.count();
}

module.exports = { findDivisis, findDivisiById, insertDivisi, editDivisi, deleteDivisi, countDivisis };