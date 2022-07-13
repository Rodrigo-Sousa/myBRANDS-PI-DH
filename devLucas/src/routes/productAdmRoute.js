const express = require("express");
const router = express.Router();
const ProductAdmController = require("../controllers/ProductAdmController");

router.get("/", ProductAdmController.index);

module.exports = router;