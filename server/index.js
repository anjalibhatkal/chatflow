const express = require("express");
const dotenv = require("dotenv");

const app = express();
dotenv.config();

app.get("/", (req, res) => {
  res.send("API is running");
});

const port = process.env.PORT || 5000;

app.listen(port, console.log("server running!!!!"));
