const express = require("express");
const router = express.Router();
const Wishlist = require("../models/Wishlist");
const Job = require("../models/Job"); // Make sure this path is correct

// 🔹 Add a job to the wishlist
router.post("/add", async (req, res) => {
  const { userId, jobId } = req.body;

  try {
    const alreadyExists = await Wishlist.findOne({ userId, jobId });
    if (alreadyExists) {
      return res.status(400).json({ message: "Job is already in wishlist." });
    }

    const newEntry = new Wishlist({ userId, jobId });
    await newEntry.save();

    res.status(201).json({ message: "Job added to wishlist", wishlist: newEntry });
  } catch (error) {
    console.error("Error adding to wishlist:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// 🔹 Get all wishlist jobs for a user
router.get("/:userId", async (req, res) => {
  try {
    const wishlistItems = await Wishlist.find({ userId: req.params.userId }).populate("jobId");
    const jobs = wishlistItems.map((item) => item.jobId); // Return only job data

    res.status(200).json(jobs);
  } catch (error) {
    console.error("Error fetching wishlist:", error);
    res.status(500).json({ message: "Server error" });
  }
});

// 🔹 Remove a job from wishlist
router.delete("/:userId/:jobId", async (req, res) => {
  const { userId, jobId } = req.params;

  try {
    await Wishlist.deleteOne({ userId, jobId });
    res.status(200).json({ message: "Job removed from wishlist" });
  } catch (error) {
    console.error("Error removing from wishlist:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
