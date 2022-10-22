import mongoose from "mongoose";

const DomainSchema = new mongoose.Schema({
  name: String,
  projects: {
    type: [mongoose.Schema.Types.ObjectId],
    ref: "projects",
  },
});

export const Domain = mongoose.model("domains", DomainSchema);
