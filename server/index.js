const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const userRoutes = require("./routes/userRoutes");

const app = express();
dotenv.config();

const connectDb = async () => {
  try {
    const connect = await mongoose.connect(process.env.MONGO_URI);
    console.log("Server connected to db");
  } catch (err) {
    console.log("Server is not connected to db", err.message);
  }
};

connectDb();
app.get("/", (req, res) => {
  res.send("API is running");
});

app.use("user/", userRoutes);

const port = process.env.PORT || 5000;

app.listen(port, console.log("server running!!!!"));
