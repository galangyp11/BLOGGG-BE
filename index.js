require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
});
const db = mongoose.connection;

app.use(cors());
app.use(express.json());

db.on("error", (error) => console.error(error));
db.once("open", () => console.log("Database connected"));

const postUser = require("./routes/users");
app.use("/users", postUser);

const postRouter = require("./routes/posts");
app.use("/posts", postRouter);

app.listen(3011, () => console.log("Server start at 3011"));
