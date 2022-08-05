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

// Rota para visualizar formulario edição
router.get("/product-adm/product-edit/:id", AdmController.edit);
// Rota para a edição do produto
router.put("/product-adm/product-edit/:id", AdmController.update);

// Rota para visualizar produto para excluir
router.get("/product-adm/product-delete/:id", AdmController.delete);
// Rota para excluir um produto
router.delete("/product-adm/product-delete/:id", AdmController.destroy);

module.exports = router;