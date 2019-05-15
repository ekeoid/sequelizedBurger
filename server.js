// *****************************************************************************
// Server.js - This file is the initial starting point for the Node/Express server.
//
// ******************************************************************************

// Dependencies
// require("dotenv").config();
var express = require("express");

// Create an instance of the express app.
var app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
var PORT = process.env.PORT || 8080;

// Requiring our models for syncing
var db = require("./models");

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use the express.static middleware to serve static content for the app from the "public" directory in the application directory.
app.use(express.static("public"));

// Import routes and give the server access to them.
const burgerApiRoutes = require("./routes/burger-api-routes");
const customerApiRoutes = require("./routes/customer-api-routes");
const htmlRoutes = require("./routes/html-routes");

app.use(burgerApiRoutes);
app.use(customerApiRoutes);
app.use(htmlRoutes);

db.sequelize.sync({ force: false }).then(function () {
    app.listen(PORT, function () {
        let message = "\n";
        
        message += "App listening on: ";
        
        message += "\x1b[0m\x1b[36m" + "http://localhost:";
        message += "\x1b[1m\x1b[36m" + PORT;
        message += "\x1b[0m";

        console.log(message);
    });
});