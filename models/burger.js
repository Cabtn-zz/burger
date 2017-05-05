var orm = require("../config/orm.js")
console.log('model');
// Console log all the party_name's.
const burger = {
  getBurgers: function (callback){
    orm.selectAll(res => {
      callback(res);
    })
  },
  addBurger: function( name, callback){
    orm.insertOne(name, res => {
      callback(res);
    })
  },
  eatBurger: function(name, callback){
    orm.updateOne(name, res => {
      callback(res);
    })
  }
};

module.exports = {burger: burger};
