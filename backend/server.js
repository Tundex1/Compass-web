// At the top of server.js
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

// Connect to the database
connectDB();

const app = express();

// Middlewareconsole.log('MONGO_URI:', process.env.MONGO_URI);
console.log("JWT_SECRET:", process.env.JWT_SECRET);
app.use(express.json());
app.use(cors());

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/traders", require("./routes/traderRoutes"));

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const dotenv = require("dotenv");
dotenv.config();
const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const connectDB = require("./config/db");

// Connect to the database
connectDB();

app.use(express.json());

// Your routes and other middleware here

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
console.log("MONGO_URI:", process.env.MONGO_URI);
console.log("JWT_SECRET:", process.env.JWT_SECRET);
