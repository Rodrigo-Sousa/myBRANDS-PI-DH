const express = require("express");
const router = express.Router();
const ProductMotherboardController = require("../controllers/ProductMotherboardController");

router.get("/", ProductMotherboardController.index);

module.exports = router;