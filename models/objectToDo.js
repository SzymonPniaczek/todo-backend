const { Schema, model } = require("mongoose");

const objectToDoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    isDone: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const ObjectToDo = model("ObjectToDo", objectToDoSchema);
module.exports = ObjectToDo;
