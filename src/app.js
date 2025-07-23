const dotenv = require('dotenv');
const express = require('express');
const cors = require('cors');

dotenv.config();
const app = express();
const PORT = process.env.PORT;

const adminAuthorization = require('./middleware/adminAuthorization');

// Middleware
app.use(cors());
app.use(express.json());

// Test route
app.get("/", (req, res) => {
    res.send('Hello there!');
});

// Public route (tanpa token)
const dashboardController = require('./dashboard/dashboard.controller');
app.get('/api/dashboard/count', dashboardController.getDashboardCount);

const adminController = require("./admin/admin.controller");
app.use("/api/admins", adminController);

// Protected routes (perlu token login)
const karyawanController = require("./karyawan/karyawan.controller");
app.use("/api/karyawans", adminAuthorization, karyawanController);

const divisiController = require("./divisi/divisi.controller");
app.use("/api/divisis", adminAuthorization, divisiController);

const jabatanController = require("./jabatan/jabatan.controller");
app.use("/api/jabatans", adminAuthorization, jabatanController);

const statusKepegawaianController = require("./statuskepegawaian/statuskepegawaian.controller");
app.use("/api/statuskepegawaian", adminAuthorization, statusKepegawaianController);

const kelasController = require("./kelas/kelas.controller");
app.use("/api/kelas", adminAuthorization, kelasController);

const absensiController = require("./absensi/absensi.controller");
app.use("/api/absensis", adminAuthorization, absensiController);

const waliKelasController = require("./walikelas/walikelas.controller");
app.use("/api/walikelas", adminAuthorization, waliKelasController);

const laporanAbsensiController = require("./laporanabsensi/laporanabsensi.controller");
app.use("/api/laporanabsensi", adminAuthorization, laporanAbsensiController);

const guruController = require("./guru/guru.controller");
app.use("/api/guru", adminAuthorization, guruController);

const mapelController = require("./mapel/mapel.controller");
app.use("/api/mapel", adminAuthorization, mapelController);



// Start server
app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
});
