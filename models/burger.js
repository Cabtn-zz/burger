var orm = require("../config/orm.js")
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
