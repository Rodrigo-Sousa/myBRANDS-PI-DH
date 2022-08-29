const express = require("express");
const router = express.Router();
const HomePageController = require("../controllers/HomePageController");

router.get("/", HomePageController.index);
router.get("/product-detail/:id",HomePageController.show)


module.exports = router;