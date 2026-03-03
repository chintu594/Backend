const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
    {
        title: String,
        des: String,
    },
    { collection: "posts" }
);

module.exports = mongoose.model("Post", postSchema);