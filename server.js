var express = require('express');
var exphbs = require("express-handlebars");
var bodyParser = require('body-parser');
var method = require('method-override');
var path = require('path');
var controller = require('./controllers/burgers_controllers.js');
const routes = require("./controllers/burgers_controllers.js");
const apiRoutes = require("./controllers/burgers_controllers.js");

//variables to set up my server
var app = express();
var orm = require('./config/orm.js');

app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

app.listen(PORT, function(){
    console.log("We are live");
    routes.router(app);
    routes.addRoute(app);
    routes.updateRoutes(app);
})
