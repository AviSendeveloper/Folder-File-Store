const Router = require("express").Router();
const AuthController = require("../Controllers/AuthController");
const { register, login } = require("../Validation/Auth");
const validator = require("../Validation/validator");

Router.post("/register", register(), validator, AuthController.register);
Router.post("/login", login(), validator, AuthController.login);

module.exports = Router;
