const express = require("express");
const router = express.Router();
// const HomePageController = require("../controllers/HomePageController");
const ProductController = require("../controllers/ProdutoController");

router.get("/", ProductController.index);
// router.get("/product-detail/:id",HomePageController.show)


module.exports = router;