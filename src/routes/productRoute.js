const express = require("express");
const router = express.Router();
const ProdutoController = require("../controllers/ProdutoController");
const AuthController = require("../controllers/AuthController")

// rota para acessar os produtos, direto pelo controller
router.get("/", ProdutoController.index);
router.get("/:id", ProdutoController.show)
router.post("/", ProdutoController.store);
router.put("/:id", ProdutoController.update);
router.patch("/:id", ProdutoController.update);
router.delete("/:id", ProdutoController.destroy);
router.get("/login-user", AuthController.authUser)

router.get("/cart-shopping", ProdutoController.cart);
router.get("/product-listing", ProdutoController.index);
router.get("/product-detail/:id", ProdutoController.detail);
router.get("/brand-detail-amd", ProdutoController.detailAmd);
router.get("/brand-detail-asus", ProdutoController.detailAsus);
router.get("/brand-detail-geil", ProdutoController.detailGeil);
router.get("/brand-detail-intel", ProdutoController.detailIntel);
router.get("/checkout-page", ProdutoController.checkout);
router.get("/",ProdutoController.index2)

module.exports = router;