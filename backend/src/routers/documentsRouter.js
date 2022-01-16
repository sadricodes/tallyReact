const express = require("express");
const router = express.Router();

router.all("/", (req, res, next) => {
  res.json({ message: "This is the documents route bruh" });
});

module.exports = router;
