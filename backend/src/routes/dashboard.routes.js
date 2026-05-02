const express = require("express");
const router = express.Router();

const protect = require("../middlewares/protect");
const authorize = require("../middlewares/authorize");

// 👤 user dashboard
router.get(
  "/user",
  protect,
  authorize("user"),
  (req, res) => {
    res.json({ message: "User dashboard", user: req.user });
  }
);

// 🏥 hospital dashboard
router.get(
  "/hospital",
  protect,
  authorize("hospital"),
  (req, res) => {
    res.json({ message: "Hospital dashboard", user: req.user });
  }
);

module.exports = router;