var express = require('express');
var path = require('path');
var { burger } = require("../models/burger.js")
//var { orm } = require("../config/orm.js")

var hbs = require("express-handlebars");
var app = express();

const htmlRoutes = (app) => {
  console.log("Burger controller");

  app.engine("handlebars", hbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");



  app.get("/", function(req, res) {
    burger.getBurgers((data) => {
      console.log("THIS IS THE DATA " + data);
      res.render("index", {burger: data});
    });
    // orm.selectAll('burgers');
  });



  app.get("/main", (req, res) => {
      console.log('survey routing');
      res.sendFile(path.join(__dirname, "../views/layouts/main.handlebars"));
  })
}

module.exports = htmlRoutes;
