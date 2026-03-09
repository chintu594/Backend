const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const path = require("path");
require("dotenv").config();

const app = express();

app.use(cors());
app.use(express.json());

// uploads folder ko public banana
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

mongoose.connect(process.env.MONGODB_URL)
  .then(() => console.log("MongoDB connected ✅"))
  .catch(err => console.log(err));

const productRoutes = require("./routes/productRoutes");
app.use("/api/products", productRoutes);

const postRoutes = require("./routes/postRoutes");
app.use("/api/posts", postRoutes);

const itemRoutes = require("./routes/itemRoutes");
app.use('/api/items', itemRoutes);

app.listen(process.env.PORT || 5000, () => {
  console.log("Server running 🚀");
});