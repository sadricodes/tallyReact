const express = require("express");
const {
  getChars,
  createChars,
  getCharById,
  updateChars,
  deleteChar,
} = require("../controllers/charController");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").get(getChars);
router.route("/create").post(createChars);
router.route("/:id").get(getCharById).put(updateChars).delete(deleteChar);

module.exports = router;
