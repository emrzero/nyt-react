var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var mongoose = require('mongoose');

var app = express();
var port = process.env.PORT || 3000;
var api = require('./routes/api.js');

app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json({
  type: 'application/vnd.api+json'
}));



app.use(express.static('./public'));

app.get('/', function(req, res) {
  res.sendFile('./public/index.html');
});

app.use('/api', api);


app.listen(port, function() {
  console.log('Listening on port: ', port);
});