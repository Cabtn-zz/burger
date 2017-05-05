var { orm } = require("../config/orm.js")
console.log('model');
// Console log all the party_name's.
const burger = {
  getBurgers: function (callback){
    orm.selectAll(res => {
      callback(res);
    })
  }
};

module.exports = {burger: burger};
// Console log all the client_name's.
//orm.insertOne("burgers", "burger_name", false);

// Console log all the parties that have a party-type of grown-up.
// orm.selectWhere("burgers", "party_type", "grown-up");
//
// Console log all the clients and their parties.
// orm.leftJoin("*", "clients", "parties", "id", "client_id");
