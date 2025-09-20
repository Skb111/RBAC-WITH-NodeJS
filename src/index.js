const express = require("express");
const dbConnect = require("./config/dbConnect");
const dotenv = require("dotenv").config();
const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");

const app = express();
// Connect to database
dbConnect();

// Middlewares
app.use(express.json());


// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

// 404 handler for undefined routes
app.use((req, res, next) => {
  res.status(404).json({
    status: 404,
    message: "Route Not Found"
  });
});

// Start server
const PORT = process.env.PORT || 7002;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));