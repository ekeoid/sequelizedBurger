var db = require("../models");

const express = require("express");
const router = express.Router();

//console.log("Burger API loaded");
//console.log(db.Burger);

router.get("/api/burgers", function(req, res) {
    db.burgers.findAll({
        include: [db.customers]
    }).then(function(result) {
        res.json(result);
    });
});

router.post("/api/burgers", function(req, res) {
    //console.log(req.body);

    db.burgers.create({
        burger_name: req.body.burger_name
    }).then(function(results) {
        res.json(results);
    });
});

router.put("/api/burgers/:id", function(req, res) {
    console.log(req.params);

    db.burgers.update({
        //burger_name: req.body.burger_name,
        devoured: true,
        customerId: req.body.customer_id
    }, {
        where: {
            id: req.params.id
        }
    }).then(function(results) {
        res.json(results);
    });
});

module.exports = router;
