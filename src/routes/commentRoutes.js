const express = require("express");
const router = express.Router();

const auth = require("../middleware/auth");
const {
  getComments,
  addComment,
  deleteComment,
} = require("../controllers/commentController");

router.get("/", getComments);
router.post("/", auth, addComment);
router.delete("/:id", auth, deleteComment);

module.exports = router;
