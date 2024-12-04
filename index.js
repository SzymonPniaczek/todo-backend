const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();

app.use(cors({ origin: true }));
app.use(express.json());

const PORT = process.env.PORT;
const MONGO_LINK = process.env.MONGO_LINK;

const todoRouter = require("./routes/todo");
app.use("/todo", todoRouter);

app.post("/", async (req, res) => {
  res.json({ message: req.body });
});

app.get("/", async (req, res) => {
  res.json({ message: "test" });
});

mongoose.connect(MONGO_LINK).then(() => {
  app.listen(PORT, () => {
    console.log(`app listen at port ${PORT}`);
  });
});
