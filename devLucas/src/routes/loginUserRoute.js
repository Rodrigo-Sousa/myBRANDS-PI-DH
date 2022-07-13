const express = require("express");
const router = express.Router();
const LoginUserController = require("../controllers/LoginUserController");

router.get("/", LoginUserController.index);

module.exports = router;