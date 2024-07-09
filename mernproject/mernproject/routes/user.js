// require express
const express = require("express");
const { register, login } = require("../controlles/user");
const {
	registerValidation,
	validation,
	loginValidation,
} = require("../middleware/validator");
const isAuth = require("../middleware/isAuth");

// router
const router = express.Router();

// test route
// router.get("/test", (req, res) => {
// 	res.send("hello world");
// });

// regitser
router.post("/register", registerValidation(), validation, register);
// login
router.post("/login", loginValidation(), validation, login);
// current user
router.get("/current", isAuth, (req, res) => {
	res.send(req.user);
});
// export
module.exports = router;
