// routes/jobRoutes.js
const express = require("express");
const router = express.Router();
const { getAllJobs, postJob } = require("../controllers/jobController");

router.get("/", getAllJobs);
router.post("/", postJob);

module.exports = router;
