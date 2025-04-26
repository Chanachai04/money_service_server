const express = require("express");
const route = express.Router();
const moneyController = require("../controllers/money.controller");

route.post("/", moneyController.getMoney);

module.exports = route;
