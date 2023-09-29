const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  judul: {
    type: String,
    required: true,
  },
  isi: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("Post", userSchema);
