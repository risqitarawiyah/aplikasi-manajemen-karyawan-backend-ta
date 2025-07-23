const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  try {
    // Urutan hapus dari tabel yang tidak punya relasi keluar, lalu naik ke yang memiliki foreign key

    await prisma.laporanAbsensi.deleteMany();
    await prisma.absensi.deleteMany();
    await prisma.waliKelas.deleteMany();
    await prisma.kelas.deleteMany();
    await prisma.guru.deleteMany();
    await prisma.mapel.deleteMany();
    await prisma.karyawan.deleteMany();
    await prisma.jabatan.deleteMany();
    await prisma.divisi.deleteMany();
    await prisma.statusKepegawaian.deleteMany();

    console.log('✅ Semua data berhasil dihapus (kecuali data admin).');
  } catch (error) {
    console.error('❌ Terjadi kesalahan saat mereset data:', error);
  } finally {
    await prisma.$disconnect();
  }
}

main();
