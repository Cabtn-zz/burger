const express = require("express");
const app = express();
const methodOverride = require("method-override");
const bodyParser = require('body-parser');
const PORT = process.env.PORT || 3000;
const exphbs = require("express-handlebars");
const connection = require("./config/connection.js");

app.use(express.static(process.cwd() + "/public"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

//Use handlebars information for formatting
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

//Import connection from config file and connect to MySQL database.

// Import router from controller file
const ROUTER = require("./controllers/burgers_controllers.js");
ROUTER.openRoute(app);

//Listen on specified port
app.listen(PORT, () => {
  console.log("App listening on port: " + PORT);
});
