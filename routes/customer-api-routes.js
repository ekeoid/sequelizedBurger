var db = require("../models");

const express = require("express");
const router = express.Router();

router.post("/api/customer", function(req, res) {
    console.log(req.body);
    
    db.customers.create({
        name: req.body.customer_name
    }).then(function(result) {
        //console.log(result);
        console.log("created " + req.body.customer_name);
        res.json(result);
    });
});

module.exports = router;