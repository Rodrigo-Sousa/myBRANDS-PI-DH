const express = require("express");
const router = express.Router();
const CadastroController = require("../controllers/CadastroController");

router.get("/", CadastroController.index);

module.exports = router;