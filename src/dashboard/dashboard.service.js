// dashboard.service.js
const { PrismaClient } = require('@prisma/client');
const { absensi } = require('../db');
const prisma = new PrismaClient();

exports.getCounts = async () => {
  try {
    const [
      karyawanCount,
      divisiCount,
      laporanCount,
      guruCount,
      waliKelasCount,
      absensiCount,
      jabatanCount,
      mapelCount,
      kelasCount,
      statusKepegawaianCount
    ] = await Promise.all([
      prisma.karyawan.count(),
      prisma.divisi.count(),
      prisma.laporanAbsensi.count(),
      prisma.guru.count(),
      prisma.waliKelas.count(),
      prisma.absensi.count(),
      prisma.jabatan.count(),
      prisma.mapel.count(),
      prisma.kelas.count(),
      prisma.statusKepegawaian.count()
    ]);

    return {
      karyawan: karyawanCount,
      guru: guruCount,
      walikelas: waliKelasCount,
      absensi: absensiCount,
      laporanAbsensi: laporanCount,
      divisi: divisiCount,
      jabatan: jabatanCount,
      mapel: mapelCount,
      kelas: kelasCount,
      statusKepegawaian: statusKepegawaianCount
    };
  } catch (error) {
    console.error('Error in dashboard.service:', error.message);
    throw error;
  }
};
