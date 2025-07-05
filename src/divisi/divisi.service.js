const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const { findDivisis, findDivisiById, insertDivisi, editDivisi, deleteDivisi, countDivisis } = require("./divisi.repository");

async function getAllDivisis() {
    const divisis = await findDivisis();
    return divisis;
}

async function getDivisiById(divisi_id) {
    const divisi = await findDivisiById(divisi_id);
    if (!divisi) {
        throw Error("Divisi tidak ditemukan!");
    }
    return divisi;
}

async function createDivisi(newDivisiData) {
    const newDivisi = await insertDivisi(newDivisiData);
    return newDivisi;
}

async function editDivisiById(divisi_id, divisiData) {
    await getDivisiById(divisi_id);
    const updatedDivisi = await editDivisi(divisi_id, divisiData);
    return updatedDivisi;
}

async function deleteDivisiById(divisi_id) {
    await getDivisiById(divisi_id);
    await deleteDivisi(divisi_id);
}

async function getDivisiCount() {
    return await countDivisis();
}

module.exports = { getAllDivisis, getDivisiById, createDivisi, editDivisiById, deleteDivisiById, getDivisiCount };