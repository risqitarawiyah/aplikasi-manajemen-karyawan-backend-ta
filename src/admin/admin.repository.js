const prisma = require("../db");

async function createUser(userData) {
    try {
        const newUser = await prisma.admin.create({ data: userData });
        return newUser;
    } catch (error) {
        throw new Error('Gagal membuat admin didalam repositori');
    }
}

async function findUserByUsername(username) {
    return prisma.admin.findUnique({ where: { username } });
}

async function findAllAdmins() {
    return prisma.admin.findMany({
        orderBy: { admin_id: 'asc' },
        select: {
            admin_id: true,
            username: true,
            email: true,
            peran: true,
        },
    });
}

async function updateAdmin(id, data) {
    return prisma.admin.update({
        where: { admin_id: id },
        data
    });
}

async function deleteAdmin(id) {
    return prisma.admin.delete({
        where: { admin_id: id }
    });
}

module.exports = {
    createUser,
    findUserByUsername,
    findAllAdmins,
    updateAdmin,
    deleteAdmin
};
