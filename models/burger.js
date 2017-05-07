var orm = require("../config/orm.js")
console.log('model');
//We are using a callback here as this is async and the data isn't ready if you use return
const burger = {
  getBurgers: function (callback){
    orm.selectAll(res => {
      callback(res);
    })
  },
  addBurger: function(name, callback){
    orm.insertOne(name, (res) => {
      callback(res);
    })
  },
  eatBurger: function(name, callback){
    orm.updateOne(name, (res) => {
      callback(res);
    })
  }
};

module.exports = {burger: burger};
