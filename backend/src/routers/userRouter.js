const express = require("express");
const router = express.Router();

router.all("/", (req, res, next) => {
  res.json({ message: "This is the user route bruh" });
});

module.exports = router;
