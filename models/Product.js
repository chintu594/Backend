const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    name: String,
    email: String,
  },
  { collection: "user" }
);

module.exports = mongoose.model("Product", productSchema);