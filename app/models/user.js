var db = require('../config');
var bcrypt = require('bcrypt-nodejs');
var Promise = require('bluebird');

var User = db.Model.extend({
  tableName: 'users',
  initialize: function(thing){
    var _this = this;
    bcrypt.hash(thing.password , null, null, function(err, hash){
      _this.set('password', hash);
    });
  }
});

module.exports = User;
