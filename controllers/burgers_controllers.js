var express = require('express');
var path = require('path');
var { burger } = require("../models/burger.js")


var hbs = require("express-handlebars");
var app = express();

//this is used to make the main page display
const htmlRoutes = (app) => {
  app.engine("handlebars", hbs({ defaultLayout: "main" }));
  app.set("view engine", "handlebars");

  app.get("/", function(req, res) {
    burger.getBurgers((data) => {
      res.render("index", {burger: data});
    });
  });
}
//this is when a user wants to add a new burger
const apiRoutes = (app) => {
  console.log("Api routes");
  htmlRoutes(app);
  app.post("/method=PUT", function(req, res){
    burger.addBurger((data) =>{
      res.send(req.body.burger_name)
      console.log("This put method actually works?")
    })
  })
}
//this is when a user clicks the devour it button
const updateRoutes = (app) => {
  console.log("update Routes");
  //htmlRoutes(app);
  app.post("/update/method=PUT", function(req, res){
    burger.eatBurger((data) => {
      res.render("index", {burger: data});
    })
  })
}


module.exports = {
  htmlRoutes,
  apiRoutes,
  updateRoutes
}
