import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema({
  name: String,
  description: String,
  project: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "projects",
  },
  members: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "users",
  },
});

export const Task = mongoose.model("tasks", TaskSchema);
