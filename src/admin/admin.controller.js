const express = require('express');
const router = express.Router();
const authService = require('./admin.service');

// Endpoint register
router.post('/register', async (req, res) => {
    const { username, email, password } = req.body;
    try {
        const newUser = await authService.register(username, email, password);
        res.status(201).json({
            data: { username: newUser.username, email: newUser.email },
            message: "Registrasi Berhasil!"
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

// Endpoint login
router.post('/login', async (req, res) => {
    const { username, password } = req.body;
    try {
        const { user, token } = await authService.login(username, password);
        res.status(200).json({
            data: { username: user.username, token },
            message: "Login Berhasil!"
        });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

module.exports = router;
