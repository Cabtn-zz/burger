var express = require('express');
var path = require('path');
var burger = require("../models/burger.js")

var app = express();

const htmlRoutes = (app) => {
  console.log("Burger conroller");
  app.use(express.static(path.join(__dirname, 'app/public')));

  app.get('/', (req,res) => {
      console.log('home routing');
      res.sendFile(path.join(__dirname,"../public/test.html"));
  })

  app.get("/survey", (req, res) => {
      console.log('survey routing');
      res.sendFile(path.join(__dirname, "../public/survey.html"));
  })
}

module.exports = htmlRoutes;
