const path = require("path");

const express = require("express");
const router = express.Router();


router.get("/", function(req, res) {
    res.redirect("/burgers");
});

router.get("/burgers", function(req, res) {
    var host = req.get('Host');
    console.log(host);
    res.sendFile(path.join(__dirname, "../public/index.html"));
});



module.exports = router;
