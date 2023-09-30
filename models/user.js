const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // fotoProfile: {
  //   type: Buffer,
  //   required: false,
  // },
  bio: {
    type: String,
    required: false,
  },
  judul: {
    type: String,
    required: true,
  },
  slug: {
    type: String,
    required: true,
  },
  isi: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("User", userSchema);
