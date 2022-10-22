import mongoose from "mongoose";

const ProjectSchema = new mongoose.Schema({
  name: String,
  description: String,
  startDate: Date,
  endDate: Date,
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "users",
  },
  tasks: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "tasks",
  },
  domain: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "domains",
  },
  createdAt: Date,
  updatedAt: Date,
});

export const Project = mongoose.model("projects", ProjectSchema);
