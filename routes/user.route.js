const express = require("express");
const route = express.Router();
const userController = require("../controllers/user.controller");

route.post("/", userController.uploadUser, userController.loginUser);
route.get("/:userName/:userPassword", userController.loginUser);
module.exports = route;
