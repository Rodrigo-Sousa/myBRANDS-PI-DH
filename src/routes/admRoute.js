const express = require("express");
const router = express.Router();
const AdmController = require("../controllers/AdmController");

router.get("/login-adm", AdmController.login);
router.get("/product-adm", AdmController.adm);

module.exports = router;