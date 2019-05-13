const db = require("../models");

const express = require("express");
const router = express.Router();


router.get("/api/burgers", function(req, res) {

});

router.post("/api/burgers", function(req, res) {

});

router.put("/api/burgers/:id", function(req, res) {

});

/*
var orm = require("../config/orm.js");

var burger = {
  all: function(cb) {
    orm.all("burgers", function(res) {
      cb(res);
    });
  },
  create: function(name, cb) {
    orm.create("burgers", [
      "burger_name", "devoured"
    ], [
      name, false
    ], cb);
  },
  update: function(id, cb) {
    var condition = "id=" + id;
    orm.update("burgers", {
      devoured: true
    }, condition, cb);
  }
};
*/

module.exports = router;
