var express = require('express');
var path = require('path');
var { burger } = require("../models/burger.js")


var hbs = require("express-handlebars");
var app = express();

//this is used to make the main page display
const router = (app) => {
  app.engine("handlebars", hbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");

  app.get("/", function(req, res) {
    burger.getBurgers((data) => {
      res.render("index", {burger: data});
    });
  });
}
//this is when a user wants to add a new burger
const addRoute = (app) => {
  console.log("Api routes");
  router(app);
  app.post("/", function(req, res){
    burger.addBurger(res.send(req.body.burger_name), (data) => {
      console.log("Burger added");
    })

    res.redirect("/");
  })
}
//this is when a user clicks the devour it button
const updateRoutes = (app) => {
  console.log("update Routes");
  app.post("/", function(req, res){
    burger.eatBurger((data) => {
      res.render("main", {burger: data});
    })
  })
}


module.exports = {
  router,
  addRoute,
  updateRoutes
}
