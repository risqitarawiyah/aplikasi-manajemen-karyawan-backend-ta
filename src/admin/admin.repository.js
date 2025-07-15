const prisma = require("../db");

async function createUser(userData) {
    try {
        return await prisma.admin.create({ data: userData });
    } catch (error) {
        throw new Error('Gagal membuat admin dalam repository');
    }
}

async function findUserByUsername(username) {
    return prisma.admin.findFirst({
        where: { username }
    });
}

module.exports = {
    createUser,
    findUserByUsername
};
