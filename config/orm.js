var connection = require("./connection");
//make all orms more generic
var orm = {
  selectAll: function (callback) {
    var queryString = "SELECT * FROM burgers";
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
      console.log(result);
    });
  },
  insertOne: function(name, bool) {
    var queryString = "INSERT INTO burgers (burger_name, devoured)";
    queryString = queryString +  " VALUES ('?', ?)"
    console.log(queryString);

    connection.query(queryString, [tableInput, name, bool], function(err, result) {
      console.log(result);
    });
  },
  updateOne: function(results) {
    var queryString = "UPDATE burgers SET eaten = ? WHERE burger_name = ?"
    connection.query(queryString, results, (err, result) => {
      console.log(result);
    });
  }
};

module.exports = {orm: orm};
