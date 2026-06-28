const express = require("express");

const router = express.Router();


const {createOrder} = require("../controllers/orderController.js");


route.post("/orders", createOrder);

module.exports = router;


