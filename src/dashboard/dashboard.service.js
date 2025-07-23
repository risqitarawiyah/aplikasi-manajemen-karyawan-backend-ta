// dashboard.service.js
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

exports.getCounts = async () => {
  try {
    const [adminCount, karyawanCount, divisiCount, laporanCount] = await Promise.all([
      prisma.admin.count(),
      prisma.karyawan.count(),
      prisma.divisi.count(),
      prisma.laporanAbsensi.count()
    ]);

    return {
      admin: adminCount,
      karyawan: karyawanCount,
      divisi: divisiCount,
      laporan: laporanCount
    };
  } catch (error) {
    console.error('Error in dashboard.service:', error.message);
    throw error;
  }
};
