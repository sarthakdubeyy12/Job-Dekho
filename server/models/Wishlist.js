const mongoose = require("mongoose");

const wishlistSchema = new mongoose.Schema({
  userId: {
    type: String, // Firebase UID
    required: true,
  },
  jobId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Job", // Make sure you have a Job model
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Wishlist", wishlistSchema);
