const dotenv = require("dotenv");
dotenv.config();


const express = require("express");
const cors = require("cors");

const authRoutes = require("./routes/auth.routes");

const app = express();

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
  console.log("---- REQUEST ----");
  console.log("Method:", req.method);
  console.log("URL:", req.url);
  console.log("Headers:", req.headers);
  next();
});
app.use("/api/auth", authRoutes);

app.get("/", (req, res) => {
  res.send("API is running...");
});


module.exports = app;