const express = require("express");
const router = express.Router();
const ProductListingController = require("../controllers/ProductListingController");

router.get("/", ProductListingController.index);

module.exports = router;