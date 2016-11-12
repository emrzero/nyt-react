var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost');

var db = mongoose.connection;

db.on('error', function(err) {
  console.log(err);
});

db.once('open', function() {
  console.log('Mongoose connection successful');
});

var logic = {}


module.exports = logic;