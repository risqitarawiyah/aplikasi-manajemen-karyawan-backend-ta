const express = require("express");
const {
  getAllMapels,
  getMapelById,
  createMapel,
  updateMapel,
  deleteMapel,
  getMapelCount
} = require("./mapel.service");

const router = express.Router();

// GET semua mapel
router.get("/", async (req, res) => {
  try {
    const mapels = await getAllMapels();
    res.json(mapels);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// GET jumlah mapel
router.get("/count", async (req, res) => {
  try {
    const count = await getMapelCount();
    res.json({ success: true, count });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

// GET mapel berdasarkan ID
router.get("/:id", async (req, res) => {
  try {
    const mapel = await getMapelById(parseInt(req.params.id));
    if (!mapel) return res.status(404).json({ message: "Mapel tidak ditemukan" });
    res.json(mapel);
  } catch (error) {
    res.status(500).send(error.message);
  }
});

// POST mapel baru
router.post("/", async (req, res) => {
  try {
    const newMapel = await createMapel(req.body);
    res.status(201).json(newMapel);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// PUT update mapel
router.put("/:id", async (req, res) => {
  try {
    const updated = await updateMapel(parseInt(req.params.id), req.body);
    if (!updated) return res.status(404).json({ message: "Mapel tidak ditemukan" });
    res.json(updated);
  } catch (error) {
    res.status(400).send(error.message);
  }
});

// DELETE mapel
router.delete("/:id", async (req, res) => {
  try {
    const deleted = await deleteMapel(parseInt(req.params.id));
    if (!deleted) return res.status(404).json({ message: "Mapel tidak ditemukan" });
    res.json({ message: "Mapel berhasil dihapus" });
  } catch (error) {
    res.status(400).send(error.message);
  }
});

module.exports = router;
