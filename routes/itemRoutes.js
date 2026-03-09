const express = require('express');
const router = express.Router();
const multer = require("multer");
const path = require("path");
const Item = require('../models/item');


/* storage setup */
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        const uniqueName = Date.now() + path.extname(file.originalname);
        cb(null, uniqueName);
    }
});

const upload = multer({ storage: storage });

/* Get method */
router.get("/", async (req, resp) => {
    try {
        const items = await Item.find();
        resp.status(200).json(items);
    } catch (err) {
        resp.status(500).json({ error: err.message })
    }
})

router.post("/", upload.single("image"), async (req, resp) => {
    try {
        const { name, price, des } = req.body;

        const saved = await Item.create({
            name, price, des, image: req.file ? req.file.filename : ""
        });
        
        resp.status(201).json(saved);
    } catch (err) {
        resp.status(500).json({ error: err.message })
    }
})

module.exports = router;