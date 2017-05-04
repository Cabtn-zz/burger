var connection = require("./connection");

var orm = {
  selectAll: function (tableInput) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, [tableInput], function(err, result) {
      if (err) {
        throw err;
      }
      console.log(result);
    });
  },
  insertOne: function(tableInput, name, bool) {
    var queryString = "INSERT INTO ?? (burger_name, devoured)";
    queryString = queryString +  " VALUES ('?', ?)"
    console.log(queryString);

    connection.query(queryString, [tableInput, name, bool], function(err, result) {
      console.log(result);
    });
  },
  // updateOne: function(whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol) {
  //   var queryString = "SELECT ?? FROM ?? AS tOne";
  //   queryString = queryString + " LEFT JOIN ?? AS tTwo";
  //   queryString = queryString + " ON tOne.?? = tTwo.??";
  //
  //   console.log(queryString);
  //
  //   connection.query(queryString, [whatToSelect, tableOne, tableTwo, onTableOneCol, onTableTwoCol], function(err, result) {
  //     console.log(result);
  //   });
  // }
};

module.exports = orm;
