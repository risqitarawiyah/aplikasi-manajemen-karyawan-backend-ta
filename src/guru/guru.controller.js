const express = require("express");
const {
  getAllGurus,
  getGuruById,
  createGuru,
  updateGuru,
  deleteGuru,
  getGuruCount
} = require("./guru.service");

const router = express.Router();

// GET semua guru
router.get("/", async (req, res) => {
  try {
    const gurus = await getAllGurus();
    res.json(gurus);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// GET jumlah guru
router.get("/count", async (req, res) => {
  try {
    const count = await getGuruCount();
    res.json({ success: true, count });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET guru berdasarkan ID
router.get("/:id", async (req, res) => {
  try {
    const guru = await getGuruById(parseInt(req.params.id));
    if (!guru) return res.status(404).json({ message: "Guru tidak ditemukan" });
    res.json(guru);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// POST guru baru
router.post("/", async (req, res) => {
  try {
    const newGuru = await createGuru(req.body);
    res.status(201).json(newGuru);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// PUT update guru
router.put("/:id", async (req, res) => {
  try {
    const updated = await updateGuru(parseInt(req.params.id), req.body);
    if (!updated) return res.status(404).json({ message: "Guru tidak ditemukan" });
    res.json(updated);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// DELETE guru
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await deleteGuru(parseInt(req.params.id));
    if (!deleted) return res.status(404).json({ message: "Guru tidak ditemukan" });
    res.json({ message: "Guru berhasil dihapus" });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
