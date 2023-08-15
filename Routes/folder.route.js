const Router = require("express").Router();
const FolderController = require("../Controllers/FolderController.js");
const { create } = require("../Validation/Folder");
const validator = require("../Validation/validator");

Router.post("/create", create(), validator, FolderController.create);

module.exports = Router;
