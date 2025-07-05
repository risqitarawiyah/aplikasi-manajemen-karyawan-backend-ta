const dotenv = require('dotenv')
const express = require('express')
const app = express()
const cors = require('cors');
const adminAuthorization = require('./middleware/adminAuthorization')
dotenv.config();
const PORT = process.env.PORT;
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
res.send('Hello there!')
})

const adminController = require("./admin/admin.controller");
app.use("/api/admins", adminController);

const karyawanController = require("./karyawan/karyawan.controller");
app.use("/api/karyawans", adminAuthorization, karyawanController);

const divisiController = require("./divisi/divisi.controller");
app.use("/api/divisis", adminAuthorization, divisiController);

const laporanController = require('./laporan/laporan.controller');
app.use('/api/laporans', adminAuthorization, laporanController);

app.listen(PORT, () => {
console.log(`App listening on port ` + PORT)
})