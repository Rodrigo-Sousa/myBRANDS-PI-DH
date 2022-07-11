const express = require("express");
const router = express.Router();
const AdmController = require("../controllers/AdmController");

router.get("/loginAdm", AdmController.login);
router.get("/productAdm", AdmController.adm);

module.exports = router;