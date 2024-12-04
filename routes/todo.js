const express = require("express");
const ObjectToDo = require("../models/objectToDo");
const router = express.Router();

router.get("/", async (req, res) => {
  const todoList = await ObjectToDo.find();
  res.json(todoList);
});

router.post("/", async (req, res) => {
  const todoObject = new ObjectToDo(req.body);
  await todoObject.save();
  res.json({ message: "succes add task" });
});

router.get("/:id", async (req, res) => {
  try {
    const result = await ObjectToDo.find({ _id: req.params.id });
    await res.json(result[0]);
  } catch (err) {
    await res.json({ error: err.message });
  }
});

router.delete("/:id", async (req, res) => {
  ObjectToDo.deleteOne({ _id: req.params.id })
    .then(() => {
      res.json({ message: "success deleted task" });
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
});

router.put("/:id", async (req, res) => {
  ObjectToDo.findOneAndUpdate({ _id: req.params.id }, req.body)
    .then(() => {
      res.json({ message: "success updated task" });
    })
    .catch((err) => {
      res.json({ error: err.message });
    });
});

module.exports = router;
