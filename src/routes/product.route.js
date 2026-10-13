const express = require("express");
const router = express.Router();
const {
  getAllProducts,
  getOneProduct,
} = require("../controller/product.controller");

// for retrieving all products
router.get("/", getAllProducts);

// for retriecing a specific product
router.get("/:id", getOneProduct);

module.exports = router;
