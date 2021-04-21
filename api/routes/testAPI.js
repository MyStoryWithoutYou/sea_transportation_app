var express = require("express");
var router = express.Router();
var ordersJsonFile = require("../orders.json");

router.get("/", function(req, res, next) {
    //res.send("orders.json");
    res.json(ordersJsonFile);
});

module.exports = router;