const express = require("express");
const router = express.Router();
const ProdutoController = require("../controllers/ProdutoController");

router.get("/cartShopping", ProdutoController.cart);
router.get("/productListing", ProdutoController.listing);
router.get("/productDetail", ProdutoController.detail);

module.exports = router;