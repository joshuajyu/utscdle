import mongoose from "mongoose";

const { Schema, model } = mongoose;

// Define the Score schema
const scoreSchema = new Schema({
  userId: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
    default: Date.now,
  },
  score: {
    type: Number,
    required: true,
  },
});

// Create the Score model
const Score = mongoose.models?.Score || model("Score", scoreSchema);
export default Score;
