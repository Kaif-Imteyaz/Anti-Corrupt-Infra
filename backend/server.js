const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config(); // Load .env variables

const app = express();
app.use(express.json());
app.use(cors());

// Import routes
const authRoutes = require("./routes/auth");
const aiInsightsRoutes = require("./routes/aiInsights");

// Connect to MongoDB
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => console.log(" MongoDB Connected"))
.catch(err => console.error("MongoDB Connection Error:", err));

// Routes
app.use("/auth", authRoutes);
app.use("/api/ai-insights", aiInsightsRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(` Server running on port ${PORT}`));
