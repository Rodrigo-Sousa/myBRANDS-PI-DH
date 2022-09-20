const express = require("express");
const router = express.Router();
const ProdutoController = require("../controllers/ProdutoController");
const AuthController = require("../controllers/AuthController")

// rota para acessar os produtos, direto pelo controller
router.get("/", ProdutoController.index);
router.post("/", ProdutoController.store);
router.get("/login-user", AuthController.authUser)

router.get("/cart-shopping", ProdutoController.cart);
// router.get("/product-listing", ProdutoController.index);
router.get("/product-detail/:id", ProdutoController.detail);
router.get("/brand-detail-amd", ProdutoController.detailAmd);
router.get("/brand-detail-asus", ProdutoController.detailAsus);
router.get("/brand-detail-geil", ProdutoController.detailGeil);
router.get("/brand-detail-intel", ProdutoController.detailIntel);
router.get("/checkout-page", ProdutoController.checkout);
router.get("/product-listing",ProdutoController.search)
router.get("/:id", ProdutoController.show)
router.put("/:id", ProdutoController.update);
router.patch("/:id", ProdutoController.update);
router.delete("/:id", ProdutoController.destroy);

module.exports = router;