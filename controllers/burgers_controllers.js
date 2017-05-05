var express = require('express');
var path = require('path');
var { burger } = require("../models/burger.js")


var hbs = require("express-handlebars");
var app = express();

const htmlRoutes = (app) => {
  app.engine("handlebars", hbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");

  app.get("/", function(req, res) {
    burger.getBurgers((data) => {
      res.render("index", {burger: data});
    });
  });
}

module.exports = htmlRoutes;
