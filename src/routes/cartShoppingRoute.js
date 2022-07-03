const express = require("express");
const router = express.Router();
const CartShoppingController = require("../controllers/CartShoppingController");

router.get("/", CartShoppingController.index);

module.exports = router;