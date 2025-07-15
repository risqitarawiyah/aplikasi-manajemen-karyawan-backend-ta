const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const userRepository = require('./admin.repository');

function generateToken(user) {
    return jwt.sign(
        {
            id: user.id,
            username: user.username,
            email: user.email,
        },
        process.env.JWT_SECRET,
        { expiresIn: '1h' }
    );
}

async function register(username, email, password) {
    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const user = {
            username,
            email,
            password: hashedPassword,
        };
        const newUser = await userRepository.createUser(user);
        return newUser;
    } catch (error) {
        console.error("Error saat registrasi:", error);
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

    const token = generateToken(user);
    return { user, token };
}

module.exports = {
    register,
    login
};
