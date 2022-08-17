const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
const UserController = require("../controllers/UserController");
const productValidator = require("../validators/ProductValidator");
const isAuth = require("../middlewares/auth");
const isGuest = require("../middlewares/guest");

router.get("/registration", UserController.registration);
router.get("/login", UserController.login);
router.get("/user-data", UserController.personal);
router.get("/registration", isGuest, UserController.register);

router.post("/login", isGuest, AuthController.authUser);
router.post("/registration", isGuest, AuthController.create);


module.exports = router;