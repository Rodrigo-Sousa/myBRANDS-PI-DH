const express = require("express");
const router = express.Router();
const AuthController = require("../controllers/AuthController");
// const UserController = require("../controllers/UserController");
const productValidator = require("../validators/ProductValidator");
const userController = require("../controllers/UserController");
const isAuth = require("../middlewares/auth");
const isGuest = require("../middlewares/guest");

// Rota para renderizar com o usuário default.
router.get("/", userController.index);
router.get("/registration", userController.registration);
router.get("/login-user", userController.loginUser);
router.get("/user-data", userController.personal);
router.get("/registration", isGuest, userController.register);

router.get("/:id", userController.show);
// router.get("/:id", userController.show);
router.post("/", userController.store);
router.put("/:id", userController.update);
router.patch("/:id", userController.update);
router.delete("/:id", userController.destroy);


router.post("/login-user", isGuest, AuthController.authUser);
router.post("/registration", isGuest, AuthController.create);

module.exports = router;
