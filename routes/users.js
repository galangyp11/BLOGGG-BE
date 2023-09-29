const express = require("express");
const router = express.Router();
const User = require("../models/user");

router.get("/", async (req, res) => {
  //   res.send("Hello World");
  try {
    const user = await User.find();
    res.json(user);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const user = new User({
    name: req.body.name,
    bio: req.body.bio,
    judul: req.body.judul,
    isi: req.body.isi,
    // name: "Dimas",
    // bio: "Aku adalah YIN",
  });

  try {
    const newUser = await user.save();
    console.log(user);
    res.json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
