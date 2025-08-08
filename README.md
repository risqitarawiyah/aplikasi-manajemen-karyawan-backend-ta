# Aplikasi Manajemen Data Karyawan - Backend
Backend ini merupakan RESTful API untuk mengelola data karyawan, guru, divisi, admin, dan laporan. API ini dibangun menggunakan Node.js dan Express, serta menggunakan PostgreSQL sebagai database.
## Fitur
- Manajemen data **Admin**
- Manajemen data **Karyawan**
- Manajemen data **Divisi**
- Manajemen data **Jabatan**
- Manajemen data **Guru**
- Manajemen data **Mapel**
- Manajemen data **Walik Kelas**
- Manajemen data **Kelas**
- Manajemen data **Status Kepegawaian**
- Autentikasi dan Otorisasi menggunakan **JWT (JSON Web Token)**
- Ringkasan data dengan **Dashboard**
## Teknologi Yang Digunakan
- **Node.js + Express**
- **PostgreSQL**
- **Prisma ORM**
- **JWT**
- **Swagger UI** untuk dokumentasi API
## Struktur Proyek
BACK-END/
- controller/    # Logika request & response
- service/       # Proses bisnis
- repository/    # Query ke database
- prisma/         # Definisi tabel database
- middleware/     # Middleware autentikasi, dll
- openapi.json    # Dokumentasi API Swagger
- app.js       # Entry point aplikasi
## Instalasi
1. Clone Repository
   `git clone (https://github.com/risqitarawiyah/aplikasi-manajemen-karyawan-backend-ta.git)`
   `cd aplikasi-manajemen-karyawan-backend-ta`
2. Install dependencies
   `npm install`
3. Buat database dan sesuaikan konfigurasi koneksi database di file .env:
   `DB_HOST=localhost
    DB_PORT=5432
    DB_USER=postgres
    DB_PASSWORD=your_password
    DB_NAME=db_manajemen_karyawan
    JWT_SECRET=your_jwt_secret`
4. Jalankan migrasi database
   `npx prisma migrate deploy`
5. Jalankan server
   npm start dan API akan berjalan di `http://localhost:3000`
## Cara menggunakan dokumentasi:
1. **Swagger Editor**:
   - Buka [https://editor.swagger.io](https://editor.swagger.io)
   - Pilih **File > Import File**, lalu pilih `openapi.json`
2. **Postman / Apidog**:
   - Import file `openapi.json` ke Postman/Apidog.
   - API siap diuji.

   
