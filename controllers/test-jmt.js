const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken');

// GET /sign-token

router.get("/sign-token", (req, res) => {
  const user = {
    _id: 1,
    username: "test",
    password: "test",
  };
  const token = jwt.sign({ user }, process.env.JWT_SECRET);
    res.json({ token });
});

// POST /verify-token

router.post("/verify-token", (req, res) => {
  const token = req.headers.authorization.split(" ")[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  res.json({ decoded });
});

module.exports = router;