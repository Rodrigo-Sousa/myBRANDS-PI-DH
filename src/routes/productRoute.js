const express = require("express");
const router = express.Router();
const ProdutoController = require("../controllers/ProdutoController");

router.get("/cart-shopping", ProdutoController.cart);
router.get("/product-listing", ProdutoController.listing);
router.get("/product-detail", ProdutoController.detail);
router.get("/brand-detail-amd", ProdutoController.detailAmd)

module.exports = router;