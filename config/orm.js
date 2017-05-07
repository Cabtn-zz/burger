var connection = require("./connection");
//make all orms more generic
var orm = {
  //this shows all burgers that are not devoured
  selectAll: function (callback) {
    var queryString = "SELECT * FROM burgers WHERE DEVOURED = 0";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
      console.log(result);
    });
  },
  insertOne: function(name, callback) {
    var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, 0)";
    connection.query(queryString, [name], function(err, result) {
      callback(result)
    });
  },
  updateOne: function(name, callback) {
    var queryString = "UPDATE burgers SET devoured = 1 WHERE burger_name = ?"
    connection.query(queryString, result, (err, result) => {
      callback(result);
    });
  }
};

module.exports = orm;
