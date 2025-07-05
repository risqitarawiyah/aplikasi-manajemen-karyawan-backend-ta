const express = require('express');
const router = express.Router();
const authService = require('./admin.service');

const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

// endpoint register
router.post('/register', async (req, res, next) => {
    const { username, email, password } = req.body;
    try {
        const newUser = await authService.register(username, email, password);
        res.status(201).json({ data: { username: newUser.username, email: newUser.email }, message: "Registrasi Berhasil!" });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// endpoint login
router.post('/login', async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const { user, token } = await authService.login(username, password);
        res.status(200).json({ data: { username: user.username, peran: user.peran, token }, message: "Login Berhasil!"});
    } catch (error) {
        res.status(400).json({ error: error.message});
    }
});

// get all admin
router.get('/', async (req, res) => {
    try {
        const admins = await prisma.admin.findMany()
        res.json({ success: true, data: admins })
    } catch (err) {
        res.status(500).json({ success: false, error: err.message })
    }
})

// endpoint create admin
router.post('/', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const hashedPassword = await authService.hashPassword(password);
        const newAdmin = await authService.createAdmin({ username, email, password: hashedPassword });
        res.status(201).json(newAdmin);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// endpoint update admin
router.put('/:admin_id', async (req, res) => {
    const adminId = parseInt(req.params.admin_id);
    const { username, email, peran } = req.body;
    try {
        const updatedAdmin = await authService.updateAdmin(adminId, { username, email, peran });
        res.json(updatedAdmin);
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// endpoint delete admin berdasarkan id
router.delete('/:admin_id', async (req, res) => {
    const adminId = parseInt(req.params.admin_id);
    try {
        await authService.deleteAdmin(adminId);
        res.json({ message: 'Admin berhasil dihapus' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
});

// Statistik jumlah admin
router.get('/count', async (req, res) => {
    try {
        const count = await prisma.admin.count();
        res.json({ success: true, count });
    } catch (err) {
        res.status(500).json({ success: false, error: err.message });
    }
});

module.exports = router;