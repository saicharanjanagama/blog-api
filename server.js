const express = require("express");
const cors = require("cors");
require("dotenv").config();

const authRoutes = require("./src/routes/authRoutes");
const postRoutes = require("./src/routes/postRoutes");
const commentRoutes = require("./src/routes/commentRoutes");

const errorHandler = require("./src/middleware/errorHandler");
const logger = require("./src/middleware/logger");

const app = express();

// Global middleware
app.use(cors());
app.use(express.json());
app.use(logger);

// Health check
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", time: new Date() });
});

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/posts", postRoutes);
app.use("/api/comments", commentRoutes);

// Error handler (always last)
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () =>
  console.log(`🚀 Server running on http://localhost:${PORT}`)
);
