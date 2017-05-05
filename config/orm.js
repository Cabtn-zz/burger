var connection = require("./connection");
//make all orms more generic
var orm = {
  selectAllDevoured: function (callback) {
    var queryString = "SELECT * FROM burgers WHERE DEVOURED = 0";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
      console.log(result);
    });
  },
  insertOne: function(name, bool, callback) {
    var queryString = "INSERT INTO burgers (burger_name, devoured)";
    queryString = queryString +  " VALUES ('?', 0)"
    console.log(queryString);

    connection.query(queryString, [tableInput, name, bool], function(err, result) {
      callback(result)
      console.log(result);
    });
  },
  updateOne: function(name, callback) {
    var queryString = "UPDATE burgers SET devoured = 1 WHERE burger_name = ?"
    connection.query(queryString, results, (err, result) => {
      callback(result);
      console.log(result);
    });
  }
};

module.exports = orm;
