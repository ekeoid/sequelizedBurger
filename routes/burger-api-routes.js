var db = require("../models");

const express = require("express");
const router = express.Router();

console.log("Burger API loaded");
console.log(db.Burger);

router.get("/api/burgers", function(req, res) {
    db.burgers.findAll({}).then(function(result) {
        res.json(result);
    });
});

router.post("/api/burgers", function(req, res) {

    console.log(req.body.burger_name);

    db.burgers.create({
        burger_name: req.body.burger_name,
    }).then(function(results) {
        res.json(results);
    });
});

router.put("/api/burgers/:id", function(req, res) {

});

module.exports = router;
