const Job = require('../models/Job');

// GET /api/jobs
exports.getAllJobs = async (req, res) => {
  try {
    const jobs = await Job.find().sort({ postedAt: -1 }); // Sort by newest first
    res.json(jobs);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

``
// POST /api/jobs
exports.postJob = async (req, res) => {
  try {
    const newJob = new Job(req.body);
    await newJob.save();
    res.status(201).json(newJob);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
