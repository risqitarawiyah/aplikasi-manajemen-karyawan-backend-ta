const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('./admin.repository');

function generateToken(user) {
    return jwt.sign({ adminId: user.admin_id, username: user.username, email: user.email, peran: user.peran }, process.env.JWT_SECRET, { expiresIn: '1h' });
}

async function hashPassword(password) {
    return bcrypt.hash(password, 10);
}

async function register(username, email, password) {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = {
            username,
            email,
            password: hashedPassword,
            peran: "ADMINISTRATOR",
        };
        const newUser = await userRepository.createUser(user);
        return newUser;
    } catch (error) {
        console.error("Error saat registrasi:", error); // tambahkan ini
        throw new Error('Username atau Email sudah terdaftar');
    }
}

async function login(username, password) {
    const user = await userRepository.findUserByUsername(username);
    if (!user) {
        throw new Error("Username atau password tidak valid");
    }

    const isValidPassword = await bcrypt.compare(password, user.password);
    if (!isValidPassword) {
        throw new Error("Username atau password tidak valid");
    }

    const token = generateToken(user); //generate token untuk admin yang berhasil login 
    return { user, token }; //mengembalikan variabel user dan token (yang berisikan token jwt)
}

async function getAllAdmins() {
    return userRepository.findAllAdmins();
}

async function createAdmin(data) {
    return userRepository.createUser(data);
}

async function updateAdmin(id, data) {
    return userRepository.updateUser(id, data);
}

async function deleteAdmin(id) {
    return userRepository.deleteUser(id);
}

module.exports = {
    register,
    login,
    getAllAdmins,
    createAdmin,
    updateAdmin,
    deleteAdmin,
    hashPassword
};