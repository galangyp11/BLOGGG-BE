const express = require("express");
const router = express.Router();
const Post = require("../models/post");

router.get("/", async (req, res) => {
  try {
    const post = await Post.find();
    res.json(post);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  const post = new Post({
    judul: req.body.judul,
    isi: req.body.isi,
  });

  try {
    const newPost = await post.save();
    console.log(post);
    res.json(newPost);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
