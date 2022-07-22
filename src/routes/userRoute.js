const express = require("express");
const router = express.Router();
const UserController = require("../controllers/UserController");

router.get("/registration", UserController.registration);
router.get("/login", UserController.login);
router.get("/user-data", UserController.personal);


module.exports = router;