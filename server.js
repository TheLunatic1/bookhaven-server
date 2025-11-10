require("dotenv").config();               // .env
const express = require("express");       // Express
const cors = require("cors");             // CORS
const mongoose = require("mongoose");     // Mongoose
const bookRoutes = require("./routes/bookRoutes"); // Book routes

const app = express();                    

// MIDDLEWARE
app.use(cors());                          
app.use(express.json());  
app.use("/api/books", bookRoutes);   


// Root route
app.get("/", (req, res) => {
  res.json({ message: "Book Haven API - Welcome! Use /api/books for endpoints." });
});



// HEALTH CHECK ROUTE
app.get("/api/health", (req, res) => {
  res.json({ 
    status: "OK", 
    message: "Book Haven API is running!" 
  });
});

// CONNECT MONGODB
mongoose
  .connect(process.env.MONGO_URI)         
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.error("MongoDB connection error:", err));

// START SERVER
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

module.exports = app;