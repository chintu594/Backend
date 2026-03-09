const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
    {
        image: String,
        name: String,
        price: Number,
        des: String
    },
    { collection: "items" }
)
module.exports = mongoose.model("Item", itemSchema);