const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// Ambil semua data karyawan beserta relasinya
async function findKaryawans() {
    return await prisma.karyawan.findMany({
        include: {
            status_kepegawaian: true,
            divisi: true,
            jabatans: {               // include relasi many-to-many
                include: { jabatan: true }
            },
            guru: {
                include: { mapel: true }
            }
        }
    });
}

// Ambil karyawan berdasarkan id
async function findKaryawanById(id) {
    return await prisma.karyawan.findUnique({
        where: { id: parseInt(id) },
        include: {
            status_kepegawaian: true,
            divisi: true,
            jabatans: {
                include: { jabatan: true }
            },
            guru: { include: { mapel: true } }
        }
    });
}

// Tambah karyawan baru dengan jabatans (array jabatanId)
async function insertKaryawan(data) {
    return await prisma.karyawan.create({
        data: {
            nama: data.nama,
            alamat: data.alamat,
            no_hp: data.no_hp,
            email: data.email,
            jenis_kelamin: data.jenis_kelamin,
            statusId: data.statusId ? parseInt(data.statusId) : null,
            divisiId: parseInt(data.divisiId),

            // Hubungkan ke banyak jabatan
            jabatans: {
                create: data.jabatanIds.map(id => ({
                    jabatanId: parseInt(id)
                }))
            }
        },
        include: {
            jabatans: { include: { jabatan: true } }
        }
    });
}

// Update karyawan + reset jabatannya
async function editKaryawan(id, data) {
    // Hapus semua relasi lama di pivot
    await prisma.karyawanJabatan.deleteMany({
        where: { karyawanId: parseInt(id) }
    });

    // Update data utama + insert jabatans baru
    return await prisma.karyawan.update({
        where: { id: parseInt(id) },
        data: {
            nama: data.nama,
            alamat: data.alamat,
            no_hp: data.no_hp,
            email: data.email,
            jenis_kelamin: data.jenis_kelamin,
            statusId: data.statusId ? parseInt(data.statusId) : null,
            divisiId: parseInt(data.divisiId),
            jabatans: {
                create: data.jabatanIds.map(jid => ({
                    jabatanId: parseInt(jid)
                }))
            }
        },
        include: {
            jabatans: { include: { jabatan: true } }
        }
    });
}

// Hapus karyawan beserta relasi jabatannya
async function deleteKaryawan(id) {
    const karyawanId = parseInt(id);

    // Hapus relasi di pivot dulu
    await prisma.karyawanJabatan.deleteMany({
        where: { karyawanId }
    });

    return await prisma.karyawan.delete({
        where: { id: karyawanId }
    });
}

// Hitung jumlah karyawan
async function countKaryawans() {
    return await prisma.karyawan.count();
}

module.exports = {
    findKaryawans,
    findKaryawanById,
    insertKaryawan,
    editKaryawan,
    deleteKaryawan,
    countKaryawans
};