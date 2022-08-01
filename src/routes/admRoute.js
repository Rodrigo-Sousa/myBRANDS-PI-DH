const express = require("express");
const router = express.Router();
const AdmController = require("../controllers/AdmController");

router.get("/home-adm", AdmController.homeAdm);
router.get("/login-adm", AdmController.login);
router.get("/product-adm", AdmController.adm);

// Rota para criar um produto
router.get("/product-adm/product-create", AdmController.createProduct);
// Rota para armazenar criação de um produto
router.post("/product-adm/product-create", AdmController.store);
// Rota para visualizar um produto
router.get("/product-adm/:id", AdmController.viewProduct);


module.exports = router;