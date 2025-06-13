const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5001;

// ✅ Middleware
app.use(cors());
app.use(express.json());

// ✅ Routes
const jobRoutes = require("./routes/jobRoutes");
const wishlistRoutes = require("./routes/wishlist"); // <-- Add this line

app.use("/api/jobs", jobRoutes);
app.use("/api/wishlist", wishlistRoutes); // <-- And this line

// ✅ MongoDB Connection
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("✅ MongoDB Connected");
    app.listen(PORT, () => {
      console.log(`🚀 Server running at http://localhost:${PORT}`);
      console.log(`👉 CORS enabled for origins: http://localhost:3000`);
    });
  })
  .catch((err) => {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1);
  });
