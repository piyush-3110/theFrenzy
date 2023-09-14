const express = require("express");
const {
  addCategory,
  deleteCategory,
  updateCategory,
} = require("../controllers/categoryController");
const authMiddleware = require("../middleware/authMiddleware");
const checkAdmin = require("../middleware/isAdmin");

const router = express.Router();

router.post("/add", authMiddleware, checkAdmin, addCategory);
router.delete("/:categoryId", authMiddleware, checkAdmin, deleteCategory);
router.put("/:categoryId", authMiddleware, checkAdmin, updateCategory);

module.exports = router;