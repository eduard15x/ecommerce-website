const express = require("express");

const {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
  updateProduct,
} = require("../controllers/productController");
const router = express.Router();

// create routes
// GET all workouts
router.get("/", getProducts);

router.get("/:id", getProduct);

router.post("/", createProduct);

router.delete("/:id", deleteProduct);

router.patch("/:id", updateProduct);

module.exports = router;
