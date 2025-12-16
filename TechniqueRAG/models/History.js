import mongoose from "mongoose";

const techniqueSchema = new mongoose.Schema({
  id: String,
  name: String,
  confidence: Number,
  tacticId: String,
  tacticName: String,
  description: String,
});

const historySchema = new mongoose.Schema(
  {
    inputText: { type: String, required: true },
    techniques: [techniqueSchema],
    summary: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model("History", historySchema);
