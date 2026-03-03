const express = require("express");
const router = express.Router();
const Product = require("../models/Product");


router.get("/", async (req, res) => {
  try {
    const products = await Product.find()/* .sort({ _id: -1 } )*/; // latest first
    res.json(products);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});


router.post("/", async (req, res) => {
  try {
    const saved = await Product.create(req.body);
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;