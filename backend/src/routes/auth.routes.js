const express = require("express");
const router = express.Router();

const { login, register } = require("../controllers/auth.controller");
const protect = require("../middlewares/protect");

// 🔐 Auth routes
router.post("/login", login);
router.post("/register", register);

// 🧠 CURRENT USER (NEW 🔥)
router.get("/me", protect, (req, res) => {
  res.json({
    id: req.user.id,
    role: req.user.role,
  });
});

router.post("/logout", (req, res) => {
  res.cookie("token", "", {
    httpOnly: true,
    expires: new Date(0), // 💣 kills cookie
  });

  res.json({ message: "Logged out" });
});

module.exports = router;