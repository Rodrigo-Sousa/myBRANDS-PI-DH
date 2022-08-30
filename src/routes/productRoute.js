const express = require("express");
const router = express.Router();
const ProdutoController = require("../controllers/ProdutoController");

router.get("/cart-shopping", ProdutoController.cart);
router.get("/product-listing", ProdutoController.listing);
router.get("/product-detail/:id", ProdutoController.detail);
router.get("/brand-detail-amd", ProdutoController.detailAmd);
router.get("/brand-detail-asus", ProdutoController.detailAsus);
router.get("/brand-detail-geil", ProdutoController.detailGeil);
router.get("/brand-detail-intel", ProdutoController.detailIntel);

module.exports = router;